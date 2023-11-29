const router = require("express").Router()
const db = require("../models")

router.get("/", async function (req, res) {
    res.render("home");
});

router.get("/login", async function (req, res) {
    res.render("login");
});

module.exports = router;