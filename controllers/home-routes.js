const router = require("express").Router()
const { Post, User, Comment } = require("../models")
const withAuth = require("../utils/auth");

router.get('/', async (req, res) => {
	try {
		const dbRes = await Post.findAll({include: [Comment]});
		const posts = dbRes.map(post => post.get({ plain: true }));

        console.log(posts);

		// send posts data to handlebars view with res.render
        res.render ('home', { posts, logged_in: req.session.logged_in })
	} catch (error) {
        console.log(error);
        res.status(500).json({
            message: "something went wrong"
        }) 
	}
});

router.get("/add-post", withAuth, async (req, res) => {
    res.render('add-post', {
        logged_in: req.session.logged_in
    });
});

router.get("/login", async function (req, res) {
    if (req.session.logged_in) {
        return res.redirect('/profile');
    }
    res.render("login");
});

router.get("/signup", async function (req, res) {
    if (req.session.logged_in) {
        return res.redirect('/profile');
    }
    res.render("signup");
});

router.get("/profile", withAuth, async (req, res) => {
    try {
        console.log("user_session", req.session);
        const dbRes = await User.findOne({
            where: {
                id: req.session.user_id
            },
            include: [
                {
                    model: Post
                }
            ]
        });

        if (!dbRes) {
            res.redirect("/login");
        }

        console.log(dbRes);

        const user = dbRes.get({ plain: true });
        console.log(user);

        res.render('profile', {
            ...user,
            logged_in: req.session.logged_in
        });
    } catch (error) {
        console.log(error);
        res.status(500).end();
    }
});

module.exports = router;