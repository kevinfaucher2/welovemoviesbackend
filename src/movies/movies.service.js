const knex = require("../db/connection.js");

function list() {
  return knex("movies").select("*");
}



function read(movie_id) {
  return knex("movies").select("*").where({ movie_id }).first();
}

function listTheaterMovies(movieId) {
  return knex("theaters as t")
    .select("t.*")
    .join("movies_theaters as mt", "t.theater_id", "mt.theater_id")
    .where({ "mt.movie_id": movieId, "mt.is_showing": true });
}

function getCritics(criticId) {
  return knex("critics").where({ critic_id });
}

function listReviews(movieId) {
  return knex("movies as m")
  .join("reviews as r", "m.movie_id", "r.movie_id")
  .where({ "m.movie_id": movieId })
}


module.exports = {
  list, // Make sure to export the function
  read,
  listTheaterMovies,
  getCritics,
  listReviews,
};