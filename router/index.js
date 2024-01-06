const   express = require("express");
const { index } = require("../controller/indexController");
const   router  = express.Router();

router.get("/", index);

module.exports = router;