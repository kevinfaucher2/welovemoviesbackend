const router = require("express").Router();
const controller = require("./movies.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).all(methodNotAllowed);

// Corrected to use the listTheaterMovies controller for '/:movieId/theaters'
router.route("/:movieId([0-9]+)/theaters").get(controller.listTheaterMovies).all(methodNotAllowed);

// Corrected to use the read controller for '/:movieId'
router.route("/:movieId([0-9]+)").get(controller.read).all(methodNotAllowed);

// Corrected to use the listReviews controller for '/:movieId/reviews'
router.route("/:movieId([0-9]+)/reviews").get(controller.listReviews).all(methodNotAllowed);

module.exports = router;
