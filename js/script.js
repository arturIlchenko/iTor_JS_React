'use strict';

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?'); // 1 задание

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
}; // 2 задание

// let oneOfLastFilm = prompt('Один из последних просмотренных фильмов?');
// let ratingLastFilm = prompt('На сколько оцените его?');

// personalMovieDB['movies'][oneOfLastFilm] = ratingLastFilm;

// oneOfLastFilm = prompt('Один из последних просмотренных фильмов?');
// ratingLastFilm = prompt('На сколько оцените его?');

const a = prompt('Один из последних просмотренных фильмов?'),
		b = prompt('На сколько оцените его?'),
		c = prompt('Один из последних просмотренных фильмов?'),
		d = prompt('На сколько оцените его?');

personalMovieDB['movies'][a] = b;
personalMovieDB['movies'][c] = d; // 3 задание

console.log(personalMovieDB);