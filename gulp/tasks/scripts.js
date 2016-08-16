const gulp = require('gulp');
const plugins = require('gulp-load-plugins');
const $ = plugins();

gulp.task('scripts',function(done) {
	return gulp.src('src/js/*.js')
	.pipe($.concat('all.js'))
	.pipe(gulp.dest('dist/js'))
	.pipe($.uglify({preserveComments : 'license'}).on('error', function (e) {console.log(e);}))
	.pipe($.rename('all.min.js'))
	.pipe(gulp.dest('dist/js'))
	done();
});
