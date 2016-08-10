module.exports = function (gulp, isRelease) {
    var systemConfig = require('../system.config.json');
    var SystemJSBuilder = require('systemjs-builder');
    var uglify = require('gulp-uglify');
    
    gulp.task('systemjs-build-vendor', function () {
        var builder = new SystemJSBuilder(systemConfig);
        // return builder.bundle('www/build/app/**/*.js - [app/**/*]', './www/build/dependencies.js', {sourceMaps: true});
                return builder.bundle('./app/dependencies.js', './www/build/dependencies.js', {sourceMaps: true});
    });

    gulp.task('bundle-vendor', ['systemjs-build-vendor'], function () {
        var chain = gulp.src('./www/build/dependencies.js');
        if (isRelease) chain = chain.pipe(uglify({mangle: { keep_fnames: true}, compress: {keep_fnames: true} }));
        return chain.pipe(gulp.dest('./www/build'));
    });
};