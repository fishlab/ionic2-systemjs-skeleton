module.exports = function (gulp, isRelease) {
    var gutil = require('gulp-util');
    var rename = require("gulp-rename");
    var copyProfile = function (name) {
        return gulp.src('./app/profiles/' + name + '.js')
            .pipe(rename('profile.js'))
            .pipe(gulp.dest('./www/build'))
    }

    gulp.task('profile', function () {
        var profile = 'dev';
        if (isRelease){
            profile ='release';
        }
        gutil.log('** current profile is '+ profile)
        return copyProfile(profile);
    });


};