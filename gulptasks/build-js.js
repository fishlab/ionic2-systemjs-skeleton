module.exports = function (gulp) {
    var runSequence = require('run-sequence');

    // gulp.task('build-js', function () {
    //     runSequence(
    //         'compile-tsc',
    //         ['bundle-static', 'bundle-vendor', 'bundle-app'],
    //         function () {}
    //     );
    // });
    

    gulp.task('build-js-lib',   ['bundle-static', 'bundle-vendor'],
            function () {}
    );
    
    gulp.task('build-js-app', function () {
        runSequence(
            'compile-tsc',
            ['bundle-app'],
            function () {}
        );
    });

}