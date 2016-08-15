module.exports = function (gulp, isRelease) {
    var files = require('../static-bundle.config.json');
    var sourcemaps = require('gulp-sourcemaps');
    var uglify = require('gulp-uglify');
    var concat = require('gulp-concat');

    gulp.task('bundle-static', function () {
        var chain = gulp.src(files)
            .pipe(concat('static.js'))
        // Compress if building for release
        if (isRelease){
            
             chain = chain
                .pipe(sourcemaps.init())
                .pipe(uglify({mangle: { keep_fnames: true}, compress: {keep_fnames: true} }))
                .pipe(sourcemaps.write('./'))
                ;
        }
        return chain.pipe(gulp.dest('./www/build'));
    });
};