var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var rename = require('gulp-rename');
var minifyCss = require('gulp-clean-css');
var sass = require('gulp-sass');
 
gulp.task('css', function () {
  gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
  	gulp.watch('scss/*.scss', ['css'])
});

gulp.task('default', ['css', 'watch']);