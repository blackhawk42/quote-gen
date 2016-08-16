const gulp = require('gulp');
const plugins = require('gulp-load-plugins');
const $ = plugins();

gulp.task('pug',function (done) {
	return gulp.src('src/pug/**/*!(_).pug')
	.pipe($.pug({
		pretty : true,
		baseDir : './src/pug'
		}))
	.pipe(gulp.dest('dist/'))
	;
});
