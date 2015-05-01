var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
var swig = require('gulp-swig');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('sass', function() {
  gulp.src('./sass/style.scss')
  .pipe(sass())
  .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
  .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*', ['sass']);
  gulp.watch('./twig/**/*', ['twig']);
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

gulp.task('default',['sass','twig', 'watch', 'browser-sync'], function() {

})

gulp.task('browser-sync', function () {
   var files = [
      './sass/**/*',
      './twig/**/*',
   ];

   browserSync.init(files, {
      server: {
         baseDir: './build'
      }
   });
});
