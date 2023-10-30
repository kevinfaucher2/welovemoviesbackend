const { all } = require("./movies.router");
const moviesService = require("./movies.service");

async function movieExists(req, res, next) {
  const movie = await moviesService.read(req.params.movieId);
  if(movie) {
    res.locals.movie = movie;
    return next();
  }
  next({ status: 404, message: "Movie cannot be found."})
}


async function list(req, res){
  const data = await moviesService.list();
  res.json({ data });
}

function read(req, res, next) {
  const { movie: data } = res.locals;
  res.json({ data })
}

async function listTheaterMovies(req, res) {
  const data = await service.listTheaterMovies();
  res.json({ data })
}

async function listReviews(req, res) {
  const movieId = res.locals.movie.movie_id;
  const reviews = await service.listReviews(movieId);
  const allReviews = [];
  for (let i = 0; i < reviews.length; i++) {
    const review = reviews[i];
    const critic = await service.getCritics(review.critic_id);
    review.critic = critic[0];
    allReviews.push(review);
  }
  res.status(200).json({ data: allReviews });
}





module.exports = {
  list,
  read: [movieExists, read],
  listTheaterMovies,
  listReviews,
}