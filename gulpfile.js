var gulp = require('gulp');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var config = {
  sass: {
    outputStyle: 'compressed'
  }
};

gulp.task('sass', function () {
  return gulp.src('./_sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./css'))
    .pipe(notify('CSS has been compiled.'));
});

gulp.task('watch', function () {
  gulp.watch('./_sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
