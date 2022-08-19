'use strict';


let numberOfFilms; // 1 задание

function start() {
	numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
	}

}



start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function showMyDB() {
	if (!personalMovieDB.privat) {
		console.log(personalMovieDB);
	}
}


function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?');
		if (a === '' || a === null || a.length > 50) {
			alert('Вы не ввели название фильма! Попробуйте снова')
			i--;
			continue
		};
		const b = +prompt('На сколько оцените его?');
		personalMovieDB['movies'][a] = b;
	}
}

rememberMyFilms();

function writeYourGenres() {
	for (let i = 0; i < 3; i++) {
		personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`)
	}
}

writeYourGenres();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('Просмотрено довольно мало фильмов')
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		alert('Вы - классический зритель');
	} else if (personalMovieDB.count >= 30) {
		alert('Вы-киноман')
	} else {
		alert('Произошла ошибка')
	}
}

detectPersonalLevel();

showMyDB();
