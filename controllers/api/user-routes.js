const router = require("express").Router();
const {User} = require("../../models");

//api/users
router.post("/", async function (req, res) {
    try {
      const dbRes = await User.create (req.body)
      res.status(200).json(dbRes)
    } catch (error) {
        console.log(error)  
        res.status(500).json({
            message: "something went wrong"
        })  
    }
});



module.exports = router;