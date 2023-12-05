const router = require("express").Router();
const {User} = require("../../models");
const bcrypt = require('bcrypt');

//api/users
router.post("/", async function (req, res) {
    try {
      const dbRes = await User.create (req.body);
      const user = dbRes.get({ plain: true });

      req.session.save(() => {
        req.session.logged_in = true;
        req.session.user_id = user.id;

        res.status(200).json(dbRes)
      });

      
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
        const { email, password } = req.body;
        // search database for user
        const userData = await User.findOne({where: {
            email
        }});

        if(!userData) {
            return res.status(401).json({
                message: "Invalid email or password"
            })
        }
        const user = userData.get({ plain: true });
        // compare password from existing user against the one in req.body
        const isPasswordValid = await bcrypt.compare(password, user.password);
        // if that is a match, make a cookie/session
        if (isPasswordValid) {
            req.session.save(() => {
                req.session.logged_in = true;
                req.session.user_id = user.id;
                res.status(200).json(user); 
            });
        } else {
            res.status(401).json({
                message: "Invalid email or password"
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "something went wrong"
        })  
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });
  

module.exports = router;