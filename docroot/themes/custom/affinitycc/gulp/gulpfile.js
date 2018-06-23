var path = "..";
var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var rename = require("gulp-rename");
var notify = require("gulp-notify");

gulp.task('serve', ['sass'], function() {
    gulp.watch(path + "/assets/sass/*.scss", ['sass']);
    gulp.watch(path + "/assets/sass/**/*.scss", ['sass']);
});

gulp.task('sass', function() {
    return gulp.src(path + "/assets/sass/overrides.scss")
        .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename("overrides.css"))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(path + "/assets/css/"))
});

gulp.task('default', ['serve']);
