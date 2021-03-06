var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var minify = require('gulp-minify-css');
var htmlmin = require('gulp-minify-html');
var del = require('del');
var rename = require('gulp-rename');
var concat = require('gulp-concat');

//var jasmine = require('gulp-jasmine');
//var mocha=require('gulp-mocha');
//压缩js
//gulp.task('task0', function() {
//	return gulp.src('index.js')
//		.pipe(browserify())
//		.pipe(uglify())
//		.pipe(gulp.dest('./dest'));
//});

////压缩jq
//gulp.task('task1', function() {
//	return gulp.src('jQuery3.2.1.js')
//		.pipe(browserify())
//		.pipe(uglify())
//		.pipe(gulp.dest('./dest'));
//});
//压缩css
gulp.task('css', function() {
	return gulp.src('index.css')
		.pipe(minify())
		.pipe(gulp.dest('./dest'));
});

//压缩html
gulp.task('html', function() {
	return gulp.src('index.html')
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('./dest'));
});

////图片
//gulp.task('image', function() {
//	return gulp.src('image/**')
//		.pipe(gulp.dest('./dest/image'));
//});

//执行压缩前，先删除文件夹里的内容
gulp.task('clean', function(cb) {

	del(['minified/css', 'minified/js'], cb)

});

////合并
//gulp.task('jsconcat', function() {
//	return gulp.src(['index.js', 'jQuery3.2.1.js'])
//		.pipe(concat('all.js'))
//		.pipe(gulp.dest('./dest'));
//});

gulp.task('default', ['clean', 'css', 'html'], function() {
	// 将你的默认的任务代码放在这
	console.log("成功");
});