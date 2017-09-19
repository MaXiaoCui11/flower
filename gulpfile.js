var gulp = require('gulp');
var uglify = require("gulp-uglify");
var sass = require("gulp-ruby-sass");
var concat = require("gulp-concat");
var connect = require("gulp-connect");


//定义编译sass文件
gulp.task('comilesass' , function() {
    return sass('./src/sass/*.scss', {
        style: 'compressed'
    }).pipe(gulp.dest('./dist/style/'))
})

//定义压缩合并js文件
gulp.task('uglifyJs' , function() {
    return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
})


//定义重新加载任务
gulp.task('reload',['comilesass','uglifyJs'],function() {
    return gulp.src('./*.html').pipe(connect.reload())
});


gulp.task('default',  ['comilesass','uglifyJs'],function() {

        //开启服务器
        connect.server({
            livereload: true,
        });

        gulp.watch('./*.html/',['./sass/*.scss' , './js/*.js'], ['reload'])
});