const router = require("express").Router();
const { Post } = require('../../models');

// api/posts
router.get('/', async (req, res) => {
	try {
		const dbRes = await Post.findAll();
		const posts = dbRes.map(post => post.get({ plain: true }));

		// send posts data to handlebars view with res.render
        res.render ('home', { home })
	} catch (error) {
        console.log(error);
        res.status(500).json({
            message: "something went wrong"
        }) 
	}
});

// Create new post route 
router.post("/", async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;