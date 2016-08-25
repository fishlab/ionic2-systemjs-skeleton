module.exports = function (gulp, isRelease) {
    var rename = require("gulp-rename");
    var setProfile = function (name) {
        return gulp.src('./app/profiles/' + name + '.js')
            .pipe(rename('profile.js'))
            .pipe(gulp.dest('./www/build'))
    }

    gulp.task('dev-profile', function () {
        return setProfile('dev');
    });

    gulp.task('release-profile', function () {
        return setProfile('release');
    })
};