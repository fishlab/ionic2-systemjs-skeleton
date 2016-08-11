module.exports = function (gulp, isRelease) {
    var SystemJSBuilder = require('systemjs-builder');
    var uglify = require('gulp-uglify');
    
    gulp.task('systemjs-build-vendor', function () {
        var builder = new SystemJSBuilder('./','www/systemjs.config.js');
        // return builder.bundle('www/build/app/**/*.js - [app/**/*]', './www/build/dependencies.js', {sourceMaps: true});
                return builder.bundle('./app/dependencies.js', './www/build/dependencies.js', {sourceMaps: true});
    });

    gulp.task('bundle-vendor', ['systemjs-build-vendor'], function () {
        if (isRelease) {
            var chain = gulp.src('./www/build/dependencies.js');        
            chain = chain.pipe(uglify({mangle: { keep_fnames: true}, compress: {keep_fnames: true} }));
            return chain.pipe(gulp.dest('./www/build'));
        }
    });
};