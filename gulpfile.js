var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    minifyCss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    concatCss = require('gulp-concat-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('js', function () {
  gulp.src([
      './public/javascripts/blog_module.js', 
      './public/javascripts/*.js'
    ])
    .pipe(concat('all.min.js'))
    .pipe(gulp.dest('./public/dist'))
    .pipe(uglify({mangle: false}))
    .pipe(gulp.dest('./public/dist'));
});

gulp.task('css', function () {
  gulp.src('./public/stylesheets/*.css')
    .pipe(concatCss('all.min.css'))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/dist'));
})

gulp.task('compress', function () {
  gulp.run('js', 'css');
})

gulp.task('develop', function () {
  nodemon({
    script: 'app.js'
  }).on('restart', function () {
    console.log('server restarted!');
  });
});
