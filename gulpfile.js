var gulp = require('gulp');
var concat = require('gulp-concat');

var package = require('./package.json');

gulp.task('basic', function() {
	gulp.src([
		'api/*.js',
		'data/*.js',
		'midi/*.js',
		'parse/*.js',
		'write/*.js',
		'raphael.js'
	])
	.pipe(concat('abcjs_basic_' + package.version + '.js'))
	.pipe(gulp.dest('bin/'));
});

gulp.task('default', ['basic']);
