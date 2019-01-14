var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();



/* browsersync autosync css changes */
gulp.task('cssInject', ['styles'], function(){
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream());
});

/*task "watches" for any changes*/
gulp.task('watch', function(){
	/*task initializes browsersync*/
	browserSync.init({ //initialize local server
		notify: false,
		server: {
			baseDir: "app"
		}
	});
	/*watch css*/
	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('cssInject');
	});
	/*watch html*/
	watch('./app/index.html',  function(){
		browserSync.reload();
	});
	/*watch js*/ 
	watch('./app/assets/scripts/**/*.js', function(){
		gulp.start('scriptsRefresh');
	})

});
	/*reload page when JS change made, make sure webpack has finished bundle */
gulp.task('scriptsRefresh', ['scripts'], function(){
	browserSync.reload();
})