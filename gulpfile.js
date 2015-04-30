var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var browserSync = require('browser-sync');
gulp.task('sass', function() {
  gulp.src('./sass/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/**/*', ['sass'])
});

gulp.task('default',['sass', 'watch', 'browser-sync'], function() {

})

gulp.task('browser-sync', function () {
   var files = [
      './sass/**/*',
      'index.html',
   ];

   browserSync.init(files, {
      server: {
         baseDir: './'
      }
   });
});
