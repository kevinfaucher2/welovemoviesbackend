const router = require("express").Router();
const controller = require("./reviews.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/")
    .post(controller.create)
    .all(methodNotAllowed);

// Corrected 'reviewsId' to 'reviewId' to match the controller parameter expectation
router.route("/:reviewId")
    .get(controller.read)
    .put(controller.update)
    .delete(controller.delete)
    .all(methodNotAllowed);

module.exports = router;
