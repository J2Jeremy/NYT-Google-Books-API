var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('styles', function(){
	return gulp.src('./app/assets/styles/styles.css')
	.pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function(){

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});

});