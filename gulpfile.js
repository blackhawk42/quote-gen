'use strict';

const gulp = require('gulp');
const reqDir = require('require-dir');

reqDir('./gulp/tasks', {
	recursive : true
});

gulp.task('watch',function () {
	gulp.watch('src/js/**/*.js',['scripts']);
	gulp.watch('src/sass/**/*.sass',['sass']);
	gulp.watch('src/img/**/*',['img']);
	gulp.watch('src/pug/**/*.pug',['pug']);
});
