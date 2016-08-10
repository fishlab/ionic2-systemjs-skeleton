module.exports = function (config) {
  var srcBase = 'app';
  var srcBuildBase = 'build/app';      // transpiled app JS files
  var testBuildBase = 'build/test';
  // var srcAssets ='/base/src/'; // component assets fetched by Angular's compiler
  var deps = require('./package.json').dependencies;
  var depsGlob  =[];
  for (var k in deps){
    depsGlob .push(k +'/**/*.js');
  }
  config.set({
    basePath: '',
    frameworks: [
      'systemjs',
      'jasmine',
    ],
    /*
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      // require('karma-htmlfile-reporter')
    ],
    */
    customLaunchers: {
      // From the CLI. Not used here but interesting
      // chrome setup for travis CI using chromium
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    // client: {
    //   clearContext: false
    // },
    files: [
      /*
      // System.js for module loading
      'node_modules/systemjs/dist/system.src.js',

      // Polyfills
      'node_modules/core-js/client/shim.js',

      // Reflect and Zone.js
      'node_modules/reflect-metadata/Reflect.js',

      'node_modules/zone.js/dist/zone.js',
      'node_modules/zone.js/dist/jasmine-patch.js',
      'node_modules/zone.js/dist/async-test.js',
      'node_modules/zone.js/dist/fake-async-test.js',
      */
      // RxJs.
      // { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
      // { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },

      // { pattern: 'node_modules/**/*.js.map', included: false, watched: false }, 

      // Angular 2 itself and the testing library
      // { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
      // { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },



      // // transpiled application & spec code paths loaded via module imports
      // { pattern: srcBase + '**/*.js', included: false, watched: true },

      // // asset (HTML & CSS) paths loaded via Angular's component compiler
      // // (these paths need to be rewritten, see proxies section)
      // { pattern: srcBase + '**/*.html', included: false, watched: true },
      // { pattern: srcBase + '**/*.css', included: false, watched: true },

      // // paths for debugging with source maps in dev tools
      // { pattern: srcBase + '**/*.ts', included: false, watched: false },
      // { pattern: srcBase + '**/*.js.map', included: false, watched: false }



      // { pattern: srcBuildBase + '/**/*.js', included: false, watched: true },
      // { pattern: srcBuildBase + '/*.js', included: false, watched: true },
      { pattern: 'www/build/*.js', included: true, watched: false },
      { pattern: testBuildBase + '/**/*.js', included: true, watched: true },
      { pattern: testBuildBase + '/*.js', included: true, watched: true },
      // { pattern: 'systemjs.config.js', included: false, watched: false },
      // 'karma-systemjs-test-shim.js',

    ],

    // proxied base paths for loading assets
    proxies: {
      // required for component assets fetched by Angular's compiler
      // "/app/": srcAssets
    },

    exclude: [],
    preprocessors: {
      'build/app/**/*.js': ['coverage']
    },
    reporters: [
      'progress',
      // 'html'
      // 'coverage'
    ],

    // plugins: [
    //   'karma-systemjs',
    //   'karma-chrome-launcher',
    //   'karma-firefox-launcher',
    //   'karma-jasmine',
    //   // 'karma-junit-reporter',
    //   'karma-coverage'
    // ],


    //plugin configurations

    systemjs: {
      // Path to your SystemJS configuration file
      configFile: 'systemjs.config.js',

      // Patterns for files that you want Karma to make available, but not loaded until a module requests them. eg. Third-party libraries.
      serveFiles: [
        'build/**/*.js',
        // 'node_modules/**/*.js',
        // 'node_modules/**/*.map'
        // 'node_modules/**/*.js',
        //  'node_modules/@angular/**/*.js'
      ].concat(depsGlob),

      // SystemJS configuration specifically for tests, added after your config file.
      // Good for adding test libraries and mock modules
      config: {
        // baseURL: '/base',
        paths: {
          '@angular/platform-browser-dynamic/testing': 'node_modules/@angular/platform-browser-dynamic/testing.js'
        }
      }
    },

    // HtmlReporter configuration
    htmlReporter: {
      // Open this file to see results in browser
      outputFile: '_test-output/tests.html',

      // Optional
      pageTitle: 'Unit Tests',
      subPageTitle: __dirname
    },

    // coverageReporter: {
    //   instrumenters: { isparta: require('isparta') },
    //   instrumenter: {
    //     '**/*.js': 'isparta'
    //   }
    // },


    //general configurations
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: [
      'Chrome',
      // 'Firefox',
      // 'PhantomJS'
    ],
    singleRun: false
  })
}
