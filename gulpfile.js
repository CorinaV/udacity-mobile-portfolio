var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('mincss', function() {
  return gulp.src('views/src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('views/dist/css'));
});


var uglify = require('gulp-uglify');

gulp.task('minjs', function() {
  return gulp.src('views/src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('views/dist/js'));
});
