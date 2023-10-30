const router = require("express").Router();
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").post(controller.create).all(methodNotAllowed);

router.route("/:reviewsId").get(controller.read).put(controller.update).delete(controller.delete).all(methodNotAllowed);


module.exports = router;