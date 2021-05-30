var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var pug = require('gulp-pug');
var del = require('del');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');
var sassGlob = require('gulp-sass-glob');
var cssunit = require('gulp-css-unit')





gulp.task('sass', function () {
	return gulp.src('./src/style/main.scss')
		.pipe(plumber({
			errorHandler: notify.onError(function (err) {
				return {
					title: 'Styles',
					message: err.message
				}
			})
		}))
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(concat('style.css'))
		.on('error', notify.onError({
			title: 'Style '
		}))
		.pipe(autoprefixer({
			overrideBrowserslist: [
				'last 2 versions',
				'opera 12.1',
				'> 1%',
				'ie 9',
				'ie 8'],
			cascade: false
		}))
		.pipe(cssunit({
			type: 'px-to-rem',
			rootSize: 16
		}))
		.pipe(csso())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/css'));
});


gulp.task('scripts', function () {
	return gulp.src('./src/scripts/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./build/js'))
		.pipe(browserSync.stream());
});


gulp.task('pug', function () {
	return gulp.src('./src/pug/**/*.pug')
		.pipe(pug({ pretty: true }))
		.on('error', notify.onError(function (error) {
			return {
				title: 'Pug',
				message: error.message
			}
		}))
		.pipe(gulp.dest('./build/html'))
});


gulp.task('clean', function () {
	return del([
		'build'
	]);
});

// gulp.task('server', function () {
//   browserSync.init({
//     open: false,
//     notify: false,
//     server: {
//       baseDir: "./build",
//     }
//   });
// });

// gulp.task('serve', function(){
//   browserSync.init({
//     // open: false,
//     server: './build/html'
//   });
//   browserSync.watch('build', browserSync.reload);

// });

gulp.task('watch', function () {
	gulp.watch('./src/style/**/*.scss', gulp.series('sass'));
	gulp.watch('./src/pug/*.pug', gulp.series('pug'));
	gulp.watch('./src/scripts/*.js', gulp.series('scripts'))
});


gulp.task('default', gulp.series(
	'clean',
	gulp.parallel(
		'sass',
		'pug',
		'scripts'
	),
	gulp.parallel(
		'watch'
		// 'serve'
	)
));