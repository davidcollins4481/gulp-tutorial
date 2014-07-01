var gulp = require('gulp');

// Include Our Plugins
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

var paths = {
    // using framework version of jquery
    scripts: [
        'bower_components/jquery/dist/jquery.js',
        'js/myscript.js'
    ]
};

gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(concat('all.js'))
        .pipe(gulp.dest('js/dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/dist'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch(['js/*.js'], ['scripts']);
});

// Default Task
gulp.task('default', ['lint', 'scripts', 'watch']);
