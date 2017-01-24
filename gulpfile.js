var gulp = require('gulp');
var rename = require('gulp-rename');
var minifyCss = require('gulp-clean-css');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var connect = require('gulp-connect');
var watch = require('gulp-watch');
var imagemin = require('gulp-imagemin'); // Подключаем библиотеку для работы с изображениями
var pngquant = require('imagemin-pngquant'); // Подключаем библиотеку для работы с png
var cache = require('gulp-cache'); // Подключаем библиотеку кеширования
var jsmin = require('gulp-uglifyjs'); // Подключаем gulp-uglifyjs (для сжатия JS)

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

//js
gulp.task('js', function () {
  gulp.src('js/main.js')
    .pipe(jsmin())
    .pipe(rename('main.min.js'))
    .pipe(connect.reload())
    .pipe(gulp.dest('js/'));
});

//img
gulp.task('img', function() {
    return gulp.src('img/**/*') // Берем все изображения из app
        .pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        })))
        .pipe(gulp.dest('images/')); // Выгружаем на продакшен
});

//watch
gulp.task('watch', function () {
  	gulp.watch('scss/*.scss', ['css'])
  	gulp.watch('index.html', ['html'])
    gulp.watch('js/main.js', ['js'])
});

//default
gulp.task('default', ['connect', 'js', 'html', 'css', 'watch']);