var express = require("express");
var router = express.Router();
var userController = require("../controllers/user.js");
var positionController = require("../controllers/position.js");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/isLogin", userController.isLogin);
router.get("/logout", userController.logout);

router.post("/addPosition", positionController.addPosition);
router.get("/getPositionList", positionController.getPositionList)
module.exports = router;