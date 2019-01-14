var gulp = require('gulp'),
webpack = require('webpack');

/* bundles our JS, and moves it to temp location via webpack.config.js */
gulp.task('scripts', function(callback){
	webpack(require('../../webpack.config.js'), function(err, stats){
		if(err){
			console.log(err.toString());
		}
		console.log(stats.toString());
		callback();
	});
});