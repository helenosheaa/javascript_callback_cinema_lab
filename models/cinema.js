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

module.exports = Cinema;
