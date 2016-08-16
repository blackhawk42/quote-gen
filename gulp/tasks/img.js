const gulp = require('gulp');
const plugins = require('gulp-load-plugins');
const $ = plugins();

gulp.task('img',function (done) {
	return gulp.src('src/img/**/*')
	.pipe($.imagemin())
	.pipe(gulp.dest('dist/img/'))
	;
});
