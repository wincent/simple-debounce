// Copyright 2015-present Greg Hurrell. All rights reserved.
// Licensed under the terms of the MIT license.

const eslint = require('gulp-eslint');
const flow = require('gulp-flowtype');
const gulp = require('gulp');
const gutil = require('gulp-util');
const mocha = require('gulp-spawn-mocha');

let watching = false;

/**
 * Ring the terminal bell.
 */
function ringBell() {
  process.stderr.write('\x07');
}

/**
 * Wrap a stream in an error-handler (until Gulp 4, needed to prevent "watch"
 * task from dying on error).
 */
function wrap(stream) {
  stream.on('error', error => {
    gutil.log(gutil.colors.red(error.message));
    gutil.log(error.stack);
    if (watching) {
      gutil.log(gutil.colors.yellow('[aborting]'));
      stream.end();
    } else {
      gutil.log(gutil.colors.yellow('[exiting]'));
      process.exit(1);
    }
    ringBell();
  });
  return stream;
}

gulp.task('default', ['watch']);

gulp.task('build', ['js']);

gulp.task('flow', ['typecheck']);

gulp.task('js', ['lint', 'test', 'typecheck']);

gulp.task('lint', () => (
  gulp.src('src/**/*.js')
    .pipe(eslint())
    .pipe(eslint.format())
));

gulp.task('typecheck', () => {
  return gulp.src('src/**/*.js', {read: false})
    .pipe(gutil.noop());

  // TODO: enable this once Flow groks ES2015/ES2016 features.
  return gulp.src('src/**/*.js')
    .pipe(wrap(flow()))
});

gulp.task('test', () => (
  gulp.src(
    [
      'src/**/__mocks__/*.js',
      'src/**/__tests__/*-test.js',
    ],
    {read: false}
  )
    .pipe(wrap(mocha({
      opts: 'mocha/mocha.opts',
      reporter: watching ? 'mocha/watch-reporter' : 'list',
    })))
));

gulp.task('watch', () => {
  watching = true;
  gulp.watch('src/**/*.js', ['build']);
});