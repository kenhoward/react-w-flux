"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //Runs a local dev server
var open = require('gulp-open'); //Open a URL in a web browser
//Next three are alternatives to Webpack
var browserify = require('browserify'); //Bundles JS
var reactify = require('reactify'); //Transforms React JSX to JS
var source = require('vinyl-source-stream'); //Use conventional text streams with Gulp
//CSS task to handle our bootstrap work
var concat = require('gulp-concat'); //Concatenates files
//Adding ESLint
var lint = require('gulp-eslint'); //Lint our JS files, including JSX

var config = {
  port: 9876,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html', //Find anything that ends in html
    js: './src/**/*.js',
    images: './src/images/*',
    css: [
      'node_modules/bootstrap/dist/css/bootstrap.min.css',
      'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
      'node_modules/toastr/toastr.css',
      './src/styles/*.css'
    ],
    dist: './dist',
    mainJs: './src/main.js'
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

//Need a task for JS - How to setup Browserify
gulp.task('js', function() {
  browserify(config.paths.mainJs)
    .transform(reactify) //Transform any JS we get and compile JSX
    .bundle() //Put it all into one file
    .on('error', console.error.bind(console)) //Error messaging on the console
    .pipe(source('bundle.js')) //Define what our bundle will be named
    .pipe(gulp.dest(config.paths.dist + '/scripts')) //Put under scripts
    .pipe(connect.reload()); //Reloads the app with JS changes, seeing the latest version in the browser
});

//Need a CSS task - Gulp Concat
gulp.task('css', function() {
  gulp.src(config.paths.css)
    .pipe(concat('bundle.css'))
    .pipe(gulp.dest(config.paths.dist + '/css')); //Same as before but for css
});

//Need a task for images
gulp.task('images', function() {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload());

  //Publish Favicon
  // gulp.src('./src/favicon.ico')
  //   .pipe(gulp.dest(config.paths.dist));
});

//Need a Lint task
gulp.task('lint', function() {
  return gulp.src(config.paths.js)
    .pipe(lint({ config: 'eslint.config.json' }))
    .pipe(lint.format());
});

//Need a task to watch files and do a live reload
gulp.task('watch', function() {
  gulp.watch(config.paths.html, ['html']);
  gulp.watch(config.paths.js, ['js', 'lint']);
});

//Need a default task
gulp.task('default', ['html', 'js', 'css', 'images', 'lint', 'open', 'watch']); //Now I can run these items, when I type in Gulp on he command line
