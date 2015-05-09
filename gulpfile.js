var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var swig = require('gulp-swig');
var autoprefixer = require('gulp-autoprefixer');
var markdown = require('gulp-markdown');

gulp.task('blog', function() {
  var fileNames = fs.readdirSync('./blog');
  var items = [];

});

gulp.task('sass', function() {
  gulp.src('./sass/style.scss')
  .pipe(sass())
  .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
  .pipe(gulp.dest('./build/css'));
});

gulp.task('js', function() {
  gulp.src('./js/**/*')
  .pipe(gulp.dest('./build/js'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*', ['sass']);
  gulp.watch('./twig/**/*', ['twig']);
  gulp.watch('./js/**/*', ['js']);
  gulp.watch('./img/**/*', ['img']);
});

gulp.task('twig', function() {
  gulp.src('./twig/pages/*')
  .pipe(swig({
    defaults: {
      cache: false
    }
  }))
  .pipe(gulp.dest('./build'));
})


gulp.task('img', function() {
  gulp.src('./img/*')
  .pipe(gulp.dest('./build/img'));
});

gulp.task('default',['sass','twig','img', 'js', 'watch', 'browser-sync'], function() {

});

gulp.task('browser-sync', function () {
   var files = [
      './sass/**/*',
      './twig/**/*',
      './js/**/*',
   ];

   browserSync.init(files, {
      server: {
         baseDir: './build'
      }
   });
});
