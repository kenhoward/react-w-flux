"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser

var config = {
  port: 9876,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html', //Find anything that ends in html
    dist: './dist'
  }
}

//Star a local development server
gulp.task('connect', function() {
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  });
});

//Need something to open a given file
gulp.task('open', ['connect'], function() {  //When you run open, first open and run connect
  gulp.src('dist/index.html') //A place to find our file
    .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'})); //Pipe the output to open the URL
});

//Need a task to handle our html files and get them moved over
gulp.task('html', function() {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist)) //Where we want our file to land
    .pipe(connect.reload()); //Reload when this happens
});

//Need a task to watch files and do a live reload
gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
});

//Need a default task
gulp.task('default', ['html', 'open', 'watch']); //Now I can run html & open, when I type in Gulp on he command line
