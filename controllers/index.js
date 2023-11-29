const router = require("express").Router()
const db = require("../models")

router.get("/", async function (req, res) {
    res.send("app running");
})

module.exports = router;