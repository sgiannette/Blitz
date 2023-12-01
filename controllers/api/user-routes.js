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

// api/users/login
router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;
        // search database for user
        const userData = await UserModel.findOne({username});

        if(!userData) {
            return res.status(401).json({
                message: "Invalid username or password"
            })
        }
        // compare password from existing user against the one in req.body
        const isPasswordValid = await bcrypt.compare(password, user.password);
        // if that is a match, make a cookie/session
        if (isPasswordValid) {
            req.session.save(() => {
                req.session.logged_in = true;
                req.session.userData_id = userData._id;
                res.status(200).json(userData); 
            });
        } else {
            res.status(401).json({
                message: "Invalid username or password"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "something went wrong"
        })  
    }
});

module.exports = router;