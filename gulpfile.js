var gulp = require('gulp');
var rename = require('gulp-rename');
var minifyCss = require('gulp-clean-css');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var watch = require('gulp-watch');

//server connect
gulp.task('connect', function () {
  connect.server({
  	root: '',
  	livereload: true
  });
});

//css 
gulp.task('css', function () {
  gulp.src('scss/style.scss')
    .pipe(sass())
    .pipe(prefix())
    .pipe(minifyCss())
    .pipe(rename('style.min.css'))
    .pipe(connect.reload())
    .pipe(gulp.dest('css/'));
});

//html
gulp.task('html', function () {
  gulp.src('./index.html')
    .pipe(connect.reload());
});

//watch
gulp.task('watch', function () {
  	gulp.watch('scss/*.scss', ['css'])
  	gulp.watch('index.html', ['html'])
});

//default
gulp.task('default', ['connect', 'html', 'css', 'watch']);