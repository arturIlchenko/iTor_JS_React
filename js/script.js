'use strict';

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?'); // 1 задание


const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

if (personalMovieDB.count < 10) {
	alert('Просмотрено довольно мало фильмов')
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
	alert('Вы - классический зритель');
}  else if (personalMovieDB.count >= 30) {
	alert('Вы-киноман')
} else {
	alert('Произошла ошибка')
}

for (let i = 0; i < 2; i++) {
	const a = prompt('Один из последних просмотренных фильмов?');
	if (a === '' || a === null || a.length > 50) {
		alert('Вы не ввели название фильма! Попробуйте снова')
		i--; 
		continue};
	const b = +prompt('На сколько оцените его?');
	personalMovieDB['movies'][a] = b;
}

console.log(personalMovieDB);