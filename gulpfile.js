var gulp = require('gulp');
var rename = require('gulp-rename');
var minifyCss = require('gulp-clean-css');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
 
gulp.task('css', function () {
  gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(minifyCss())
    .pipe(rename('style.min.css'))
    .pipe(gulp.dest('css/'));
});

gulp.task('watch', function () {
  	gulp.watch('scss/*.scss', ['css']);
});

gulp.task('default', ['css', 'watch']);