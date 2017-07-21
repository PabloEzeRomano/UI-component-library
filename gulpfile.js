/* eslint-disable no-useless-escape */
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
const replace = require('gulp-replace');
const sass = require('gulp-sass');

gulp.task('babel', () => {
  gulp.src(['./src/**/*.js*'])
    .pipe(babel())
    .pipe(replace('.scss', '.css'))
    .pipe(gulp.dest('./dist'));
});

gulp.task('eslint', () => {
  gulp.src(['./src/**/*.js', '!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('scss', () => {
  gulp.src('./src/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('lint:watch', () => {
  gulp.watch(['./src/**/*.js', '!node_modules/**'], ['lint']);
});

gulp.task('scss:watch', () => {
  gulp.watch('./src/**/*.scss', ['scss']);
});

gulp.task('build', ['babel', 'scss']);
gulp.task('scss:watch', ['scss:watch']);
gulp.task('lint', ['eslint']);
gulp.task('lint:watch', ['lint:watch']);
