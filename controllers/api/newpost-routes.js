const router = require("express").Router();

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

module.exports = router;