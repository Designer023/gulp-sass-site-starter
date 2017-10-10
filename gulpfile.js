'use strict';

// Import packages
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

// Define sources and destinations
var SRC_SCSS = './src/scss/**/*.scss';
var DEST_CSS = './static/css';

// Configure PostCSS plugins
var post_css_plugins = [
    autoprefixer({browsers: ['last 3 version']})
];

//
gulp.task('sass', function () {
  return gulp.src(SRC_SCSS)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(post_css_plugins))
    .pipe(gulp.dest(DEST_CSS));
});


gulp.task('watch', function () {
  gulp.watch(SRC_SCSS, ['sass']);
});

// 
gulp.task('default', ['sass']);
