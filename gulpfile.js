var gulp = require('gulp');
var uglify = require("gulp-uglify");
var sass = require("gulp-ruby-sass");
var concat = require("gulp-concat");
var connect = require("gulp-connect");
var htmlImport = require('gulp-html-import');
var del = require('del');
var  fileinclude = require('gulp-file-include');





//html中引入文件
gulp.task('import', function () {
    gulp.src('*.html')
        .pipe(htmlImport('./components/'))
        .pipe(gulp.dest('page')); 
})
// gulp.task('html', function () {
//     return gulp.src('./*.html')
//     .pipe(fileinclude())
//     .pipe(gulp.dest('./dist'));
// });




//定义编译sass文件
gulp.task('comilesass' , function() {
    return sass('./src/sass/*.scss', {
        style: 'compressed'
    }).pipe(gulp.dest('./dist/style/'))
})

//定义压缩合并js文件
gulp.task('uglifyJs' , function() {
    return gulp.src('./src/js/libs/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
})


//定义重新加载任务
gulp.task('reload',['comilesass','uglifyJs','import'],function() {
    return gulp.src('page/*.html').pipe(connect.reload())
});


gulp.task('default',  ['comilesass','uglifyJs','import'],function() {

        //开启服务器
        connect.server({
            livereload: true,
        });

        gulp.watch(['page/*.html','./src/sass/*.scss' , './src/js/**/*.js'], ['reload'])
});