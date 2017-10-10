'use strict';


/* -------- PACKAGES ----------*/

// Import packages
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var clean_css = require('postcss-clean');


/* -------- CONFIGURATION ----------*/

// Define sources and destinations
var SRC_SCSS = './src/scss/**/*.scss';
var DEST_CSS = './static/css/built';

// Configure browser support
var supported_browsers = [
    'last 3 versions',
    'safari >= 9',
    'ie >= 11',
    'ios 9',
    'android 4'
];

// Configure PostCSS plugins
var post_css_plugins = [
    autoprefixer({browsers: supported_browsers}),
    clean_css() // For un-minified CSS comment out this line and rerun gulp / gulp watch / gulp sass
];


/* -------- GULP TASKS ----------*/

// Compile Sass files into CSS
gulp.task('sass', function () {
  return gulp.src(SRC_SCSS)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(post_css_plugins))
    .pipe(gulp.dest(DEST_CSS));
});

// The watch task 'watches' files for changes and if they change it runs the task(s) stated
gulp.task('watch', function () {
  gulp.watch(SRC_SCSS, ['sass']);
});

// The tasks that are run when 'gulp' is run without a task
gulp.task('default', ['sass']);
