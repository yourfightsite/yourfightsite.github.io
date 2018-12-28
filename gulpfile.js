'use strict';

let gulp = require('gulp');
let notify = require('gulp-notify');
let sass = require('gulp-sass');
let sourcemaps = require('gulp-sourcemaps');

let config = {
  sass: {
    outputStyle: 'compressed'
  }
};

gulp.task('sass', () => {
  return gulp.src('./_sass/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(notify('CSS has been compiled.'));
});

gulp.task('watch', () => {
  return gulp.watch('./_sass/**/*.scss', gulp.series('sass'));
});

gulp.task('build', gulp.series('sass'));

gulp.task('default', gulp.series('build', 'watch'));
