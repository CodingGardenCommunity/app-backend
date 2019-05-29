const gulp = require('gulp');
const apidoc = require('gulp-apidoc');

gulp.task('apidoc', (done) => {
  apidoc({
    src: './src',
    dest: './apidoc',
  }, done);
});

gulp.task('watch', () => {
  gulp.watch(['./src/**'], ['apidoc']);
});
