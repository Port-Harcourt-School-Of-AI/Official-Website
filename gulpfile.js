//Variables
var gulp        = require('gulp');  
var minifyCSS   = require('gulp-clean-css');  
var concat      = require('gulp-concat');  
var uglify      = require('gulp-uglify');  
var imagemin    = require('gulp-imagemin');  
var rename      = require('gulp-rename');  

gulp.task('styles',function(){  
    var stylesSrc = [
        './css/**/*.css'
    ];
    return gulp.src(stylesSrc)
        .pipe(concat('dev.css'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(rename('external.min.css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('scripts',function(){  
    var scriptSrc =[
        './js/vendor/**/*.js',
        './js/index.js'

    ];
    gulp.src(scriptSrc)
        .pipe(concat('dev.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(rename('prod.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('.dist/js'));
});

//Tasks for the different image directory
gulp.task('images1',function(){ 
	var imagesSrc =[
        './media/images/gallery/*',

    ] 
    return gulp.src(imagesSrc)
        .pipe(imagemin())
        .pipe(gulp.dest('./media/images/gallery/'));
});
gulp.task('images2',function(){ 
	var imagesSrc =[
        './media/images/team/*',

    ] 
    return gulp.src(imagesSrc)
        .pipe(imagemin())
        .pipe(gulp.dest('./media/images/team/'));
});
gulp.task('images3',function(){ 
	var imagesSrc =[
        './media/images/*',

    ] 
    return gulp.src(imagesSrc)
        .pipe(imagemin())
        .pipe(gulp.dest('./media/images/'));
});

gulp.task('default', ['styles','scripts','images1','images2','images3']); 