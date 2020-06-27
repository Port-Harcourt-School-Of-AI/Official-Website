//Variables
var gulp        = require('gulp');  
var minifyCSS   = require('gulp-clean-css');  
var concat      = require('gulp-concat');  
var uglify      = require('gulp-uglify');  
var imagemin    = require('gulp-imagemin');  
var rename      = require('gulp-rename');  

//Tasks for the different image directory
gulp.task('images1',function(){ 
    return gulp.src('media/images/gallery/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('images2',function(){ 
    return gulp.src('./media/images/team/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./media/images/team/'));
});

gulp.task('images3',function(){ 
    return gulp.src('./media/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./media/images/'));
});

gulp.task('images4',function(){ 
    return gulp.src('./media/podcast/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./media/podcast/'));
});


gulp.task('default', ['images1','images2','images3', 'images4']); 