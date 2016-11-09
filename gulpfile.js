var NG_APP = 'app/**/*.js';
var HTML_APP = 'app/**/*.html';
var CSS_APP = 'assets/**/*.css';
var FONTS_APP = 'assets/fonts/*.*';
var IMG_APP = 'assets/images/**/*.*';
var JS_DEP_APP = 'assets/js/**/*.js';

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var eslint = require('gulp-eslint');
var clean = require('gulp-clean');
var cleanCss = require('gulp-clean-css');
var Server = require('karma').Server;
var runSequence = require('run-sequence');
var argv = require('yargs').argv;

var BUILDCONF = argv.CONF ? argv.CONF + '' : 'Debug';
var WWWROOT = argv.PATH ? argv.PATH + '' : './';
var WWWROOT_ASSETS = argv.PATH ? argv.PATH + '/content' : './content';
var WWWROOT_LIB = argv.PATH ? argv.PATH + '/lib' : './lib';

// Remove the copy-json task if you won't have static json files in your application.
gulp.task('build-dev', ['copy-html', 'copy-json', 'dev-ng', 'build-assets']);
gulp.task('build-assets', ['dev-css', 'dev-js']);
//gulp.task('build-prod', ['copy-html', 'dev-css', 'dev-js', 'prod-ng']);
//gulp.task('watch', function () { gulp.watch(NG_APP, ['build-dev']); });


gulp.task('watch-ng', function () {
    gulp.watch(NG_APP, ['dev-ng']);
});
gulp.task('copy-html', function () {
    gulp.src([HTML_APP]).pipe(gulp.dest(WWWROOT + '/ng-html'));
});
gulp.task('copy-json', function () {
    gulp.src(['app/**/*.json']).pipe(gulp.dest(WWWROOT + '/ng-html'));
});
gulp.task('dev-ng', function () {
    gulp.src([NG_APP, '!gulpfile.js', '!node_modules/**/*.*', '!wwwroot/**/*.*', '!js/**/*.*'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(WWWROOT));
});

gulp.task('dev-css', function () {
    gulp.src([CSS_APP])
        .pipe(sourcemaps.init())
        .pipe(cleanCss())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(WWWROOT_ASSETS));

    gulp.src([FONTS_APP])
        .pipe(gulp.dest(WWWROOT_ASSETS + '/fonts'));

    gulp.src([IMG_APP])
        .pipe(gulp.dest(WWWROOT_ASSETS + '/images'));
});

gulp.task('dev-js', function () {
    gulp.src([JS_DEP_APP])
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(WWWROOT_ASSETS + '/js'));
});

// Handle the error
function errorHandler(error) {
    console.log(error.toString());
    this.emit('end');
}