module.exports = function (gulp, isRelease) {
    var typescript = require('gulp-typescript');
    var inlineNg2Template = require('gulp-inline-ng2-template');
    var tsProject = typescript.createProject('./tsconfig.json');

    gulp.task('compile-tsc', function () {
        var stream = tsProject.src()
            .pipe(typescript(tsProject))
        // if (isRelease) {
        //     stream = stream.pipe(inlineNg2Template({
        //         base: '/',
        //         target: 'es6',
        //         useRelativePaths: true,
        //         removeLineBreaks: true
        //     }));
        // }
        return stream.pipe(gulp.dest('./www/build'));
    });
}