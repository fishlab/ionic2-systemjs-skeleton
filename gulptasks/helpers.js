module.exports = function (gulp, isRelease) {

    gulp.task('show-deps', function () {
        var package = require('../package.json');

        var show = function (dependenciesDesc) {
            var dependencies = [];
            for (var k in dependenciesDesc) {
                dependencies.push(k);
            }
            console.log(dependencies.join(' '));
        }
        console.log('-- dependencies --');
        show(package.dependencies);

        console.log('-- dev dependencies --');
        show(package.devDependencies);
        

    });
}