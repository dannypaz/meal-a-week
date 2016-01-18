const gulp = require('gulp');
const eslint = require('gulp-eslint');

function lint() {
  return gulp.src(['./**/**/*.js', '|node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function finished() {
  console.log('Linting has completed successfully.');
}

gulp.task('lint', lint);
gulp.task('default', ['lint'], finished);
