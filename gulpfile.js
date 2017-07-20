const gulp = require('gulp');
const del = require('del');

var sass = require('gulp-sass');

const babel = require('gulp-babel');

// gulp.task('clean:dist', () => {
//   return del([
//     'dist'
//   ]);
// });

gulp.task('copy', function () {
  return gulp.src('./src/**/*.{gif,png,jpg,svg}')
    .pipe(gulp.dest('./dist'));
});

//Watch task
gulp.task('default',function() {
  gulp.watch('src/**/*.scss',['styles']);
});

gulp.task('sass', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('babel', () => {
  gulp.src(['./src/**/*.js', './src/**/*.jsx'])
    .pipe(babel({
      presets: ['react', 'stage-1', 'es2015'],
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['copy', 'babel', 'sass']);
gulp.task('default', ['build']);
