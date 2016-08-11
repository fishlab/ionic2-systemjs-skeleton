(function (isRelease, shouldWatch) {
    var gulp = require('gulp');
    var gulpUtil = require('gulp-util');
    var gulpWatch = require('gulp-watch');
    var del = require('del');
    var runSequence = require('run-sequence');

    // Require tasks in 'gulptasks' folder
    ['systemjs-build', 'static-bundle', 'compile-tsc', 'app-bundle', 'build-js']
        .forEach(function (task) {
            require('./gulptasks/' + task + '.js')(gulp, isRelease);
        });

    // Default ionic hooks
    gulp.task('serve:before', ['watch']);
    gulp.task('emulate:before', ['build']);
    gulp.task('deploy:before', ['build']);
    gulp.task('build:before', ['build']);
    gulp.task('run:before', [shouldWatch ? 'watch' : 'build']);

    // Default ionic tasks
    var buildSass = require('ionic-gulp-sass-build');
    var copyHTML = require('ionic-gulp-html-copy');
    var copyFonts = require('ionic-gulp-fonts-copy');

    // gulp.task('html', function (args) {
    //     return isRelease ? gulpUtil.log('will not copy html files cause of release') : copyHTML({ dest: 'www/build/app' });
    // });
    gulp.task('html', copyHTML);

    gulp.task('sass', buildSass);
    gulp.task('fonts', copyFonts);
    gulp.task('clean', function () {
        return del('www/build');
    });

    // Watch task
    gulp.task('watch', function (done) {
        var typescript = require('gulp-typescript');
        var inlineNg2Template = require('gulp-inline-ng2-template');
        var tsProject = typescript.createProject('./tsconfig.json');
        // runSequence(
        // ['html', 'sass', 'fonts', 'build-js-lib', 'build-js-app'],
        var suffixProccessors = {
            'ts': function (vinly) {
                gulp.src(vinly.path, { base: process.cwd() })
                    .pipe(typescript(tsProject))
                    //todo when dist
                    // .pipe(inlineNg2Template({
                    //     base: '/',
                    //     target: 'es6',
                    //     useRelativePaths: true,
                    //     removeLineBreaks: true
                    // }))
                    .pipe(gulp.dest('./www/build'));
            },
            'js': function () {
                gulp.start('bundle-app')
            },
            'scss': function () {
                gulp.start('sass');
            },
            'html': function (vinly) {
                return gulp
                    .src(vinly.path, { base: process.cwd() + '/app' })
                    .pipe(gulp.dest('./www/build'))
            }
        }

        gulpWatch(['app/**/*', 'test/**/*'], function (vinly) {
             var suffix = vinly.extname.substr(1).toLocaleLowerCase();            
            gulpUtil.log(suffix + ' file ' + vinly.event + ': ' + vinly.path);
            var createOrRemove = ['add', 'change'].indexOf(vinly.event) != -1;
            if (createOrRemove && suffixProccessors[suffix] ) {
                return suffixProccessors[suffix](vinly);
            }

        });
        done();
    });

    gulp.task('watch-html', function (params) {
        gulpWatch('app/**/*.html', function (vinly) {
            gulpUtil.log('html changed ' + vinly.path);

        });
    })

    // gulp.task('typescript', function () {
    //     gulpWatch('app/**/*.ts', function (vinly) {
    //         console.log(vinly.path);
    //         // gulp.start('compile-tsc')
    //         // vinly.pipe(process.stdout);
    //         gulp.src(vinly.path, { base: process.cwd() })
    //             // vinly
    //             .pipe(typescript(tsProject))
    //             //todo when dist
    //             .pipe(inlineNg2Template({
    //                 base: '/',
    //                 target: 'es6',
    //                 useRelativePaths: true,
    //                 removeLineBreaks: true
    //             }))
    //             .pipe(gulp.dest('./www/build'));
    //     });
    // });

    // Build task
    gulp.task('build', function (done) {
        runSequence(
            'clean',
            ['html', 'sass', 'fonts', 'build-js-lib', 'build-js-app'],
            done
        );
    });


    gulp.task('serve', function () {

        var webserver = require('gulp-webserver');
        // var serveIndex = require('serve-index');
        function directoryMapping(req, res, next) {
            console.log(req.url);
            if (req.url.startsWith('/build/')) {
                req.url = '/www' + req.url;
            }
            return next();
        }
        function cordova(req, res, next) {
            if (req.url == '/cordova.js') {
                res.end();

            } else {
                next();
            }
        }
        var startServer = function () {
            return gulp.src('./www')
                .pipe(
                webserver({
                    open: true,
                    port: 8200,
                    livereload: true,
                    // path: 'www',
                    fallback: 'index.html',
                    // directoryListing: true,
                    // proxies: [{ source: '/build', target: '/www/build' }],
                    middleware: [cordova],
                })
                )
        }
        var openInBrowser = function () {
            var open = require('open');
            open('http://localhost:8200');
        }
        startServer();
        // openInBrowser();
    });

    var KarmaServer = require('karma').Server;

    gulp.task('test', ['build'], function (done) {
        new KarmaServer({
            configFile: __dirname + '/karma.conf.js',
            singleRun: true
        }, done).start();
    });


    gulp.task('watch-test', ['watch'], function (done) {
        new KarmaServer({
            configFile: __dirname + '/karma.conf.js',
            singleRun: false,
        }, done).start();
    });

})(
    process.argv.indexOf('--release') > -1,
    process.argv.indexOf('-l') > -1 || process.argv.indexOf('--livereload') > -1
    );