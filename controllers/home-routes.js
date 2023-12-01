const router = require("express").Router()
const {Post} = require("../models")

router.get('/', async (req, res) => {
	try {
		const dbRes = await Post.findAll();
		const posts = dbRes.map(post => post.get({ plain: true }));

		// send posts data to handlebars view with res.render
        res.render ('home', { posts })
	} catch (error) {
        console.log(error);
        res.status(500).json({
            message: "something went wrong"
        }) 
	}
});

router.get("/login", async function (req, res) {
    res.render("login");
});

module.exports = router;