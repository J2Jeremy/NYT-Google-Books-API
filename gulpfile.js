var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

/*
task moves css to temp location
*/
gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));
});

/*
task moves html to temp location
*/
gulp.task('html', function(){
	return gulp.src('./app/index.html')
	.pipe(gulp.dest('./app/temp/'));
});

/*
task "watches" for any change in CSS and starts our STYLES task
*/
gulp.task('watch', function(){
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});
	watch('./app/index.html', function(){
		gulp.start('html');
	});

});