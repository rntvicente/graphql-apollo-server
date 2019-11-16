const del = require('del');
const gulp = require('gulp');
const ts = require('gulp-typescript');

const tsProject = ts.createProject('tsconfig.json');

function scripts() {
	const tsResult = tsProject
		.src()
		.pipe(tsProject());

	return tsResult.js
		.pipe(gulp.dest('dist'));
}

function static() {
	return gulp
		.src('src/**/*.json')
		.pipe(gulp.dest('dist'));
}

function clean() {
	return del(['dist']);
}

function watchFile() {
	return gulp.watch(['src/**/*.ts', 'src/**/*.json'], build);
}

const build = gulp.series(clean, gulp.series(static, scripts));
const watch = gulp.series(build, watchFile);

gulp.task('default', watch);
