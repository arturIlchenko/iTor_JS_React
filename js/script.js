'use strict';

const personalMovieDB = {
	count: '',
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start() {
		personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов Вы уже посмотрели?', '');
		}
	},
	detectPersonalLevel() {
		if (personalMovieDB.count < 10) {
			alert('Просмотрено довольно мало фильмов')
		} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
			alert('Вы - классический зритель');
		} else if (personalMovieDB.count >= 30) {
			alert('Вы-киноман')
		} else {
			alert('Произошла ошибка')
		}
	},
	rememberMyFilms() {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов?').trim();
			if (a === '' || a === null || a.length > 50) {
				alert('Вы не ввели название фильма! Попробуйте снова')
				i--;
				continue
			};
			const b = +prompt('На сколько оцените его?');
			personalMovieDB['movies'][a] = b;
		}
	},
	writeYourGenres() {
		for (let i = 0; i < 3; i++) {
			const a = prompt(`Ваш любимый жанр под номером ${i + 1}`);
			if (a === null || a === '') {
				i--;
				continue
			} else {
			personalMovieDB.genres[i] = a;
			}
		};
		personalMovieDB.genres.forEach(element => {
			console.log(`Любимый жанр №${personalMovieDB.genres.indexOf(element) + 1} - это ${element}`)
		});
	},
	showMyDB() {
		if (!personalMovieDB.privat) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB() {
		if (personalMovieDB.privat === false) {
			personalMovieDB.privat = true
		} else if (personalMovieDB.privat === true) {
			personalMovieDB.privat = false
		}
	}
};

personalMovieDB.start();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();