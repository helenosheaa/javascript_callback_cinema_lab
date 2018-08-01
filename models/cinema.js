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

Cinema.prototype.checkIfFilmsForYearExist = function (yearToCheck) {
  return this.films.some((film) => film.year === yearToCheck);
}

Cinema.prototype.checkIfFilmsMeetMinimumLength = function (minimumLength) {
  return this.films.every((film) => film.length > minimumLength);
};

module.exports = Cinema;
