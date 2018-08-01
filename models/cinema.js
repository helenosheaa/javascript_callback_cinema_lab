const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.getFilmTitles = function () {
  const titles = [];
  this.films.forEach((film) => {
    titles.push(film.title);
  });
  return titles;
}

Cinema.prototype.findFilmByTitle = function (titleToFind) {
  const foundFilm = this.films.filter( film => film.title === titleToFind);
  return foundFilm.pop();
}

Cinema.prototype.filterByGenre = function (genre) {
  const filmsOfGenre = this.films.filter( film => film.genre === genre);
  return filmsOfGenre;
};

module.exports = Cinema;
