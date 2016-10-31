var express = require('express');
var router = express.Router();

router.use("/aiservice",require("../controllers/aicontent.api"));

module.exports = router;
