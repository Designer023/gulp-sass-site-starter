# Gulp Sass Starter Site

## What is this for?

This is meant to be a starting off point for creating small websites (microsites) while using gulp and Sass.


## How do I use it?

### I have Node/NPM and Gulp already installed on my computer

If you have used NPM or Node, and Gulp on another project on your machine then you should already have this installed. Skip Straight over the next section.

### I need to install Node and/or Gulp

Head over to [https://nodejs.org/en/](https://nodejs.org/en/) and install the LTS version (Long term service).

Install Gulp globally on your computer by typing the following into a terminal window:

  npm install gulp-cli -g

## Setup the files and start compiling sass

The packages that process files like Sass need to be installed into the project so they can be used. In the terminal window (in your project directory)

  npm install

Now that the packages are installed you can run Gulp.

  gulp

By default Gulp will run all the tasks in the default task. Since the aim of this project is to compile Sass into CSS then we need to run

  gulp sass

Or if you want to leave gulp to keep an eye on your changes and run Sass itself then run

  gulp watch

## Notes

- A 'built' folder is used for compiled files so that it's clear to other users that some kind of build pipeline (Gulp) is being used. This protects from users making changes to the compiled CSS which could later be overwritten by a recompile of the Sass.
- In bigger projects the compiled files would not be saved to the .git repo
- The 'node_modules' folder does not need and should not be copied to where the files are hosted. The node_modules are installed based on the package.json file so don't need to be copied between machines. There are a lot of files in the node_modules folder and this takes a lot of time to copy around. It is excluded from being tracked in git for this reason.
- If you intend for other people to edit the project at a later date (yourself in included) then make sure that the 'src' folder, gulpfile.js, package.json are all kept with the project files.
