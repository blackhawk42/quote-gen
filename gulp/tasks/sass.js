const gulp = require('gulp');
const plugins = require('gulp-load-plugins');
const $ = plugins();

gulp.task('sass',function (done) {
	return gulp.src('src/sass/*.sass')
	.pipe($.sass())
	.pipe(gulp.dest('dist/css/'))
	.pipe($.minifyCss())
	.pipe($.rename('styles.min.css'))
	.pipe(gulp.dest('dist/css/'));
});
