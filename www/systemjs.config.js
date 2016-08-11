// system.config.js
!function (global) {
    var packages = {
        'app': { main: 'index.js', defaultExtension: 'js' },
    };
    var baseURL = null;
    try{
         var config = System.getConfig();
        config.baseURL &&( baseURL = config.baseURL);
    }catch(ex){
        baseURL =  '/';
    }
    System.config({
        baseURL: baseURL,
        // transpiler: "plugin-babel",
        // paths: {
        //     "src/*": "build/src/*",
        // },

        packages: packages,
        map: {
            //dependencies
            'systemjs': 'node_modules/systemjs/dist/system.js',
            // 'plugin-babel': 'node_modules/systemjs-plugin-babel/plugin-babel.js',
            // 'systemjs-babel-build': 'node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
            'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
            'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js'
        },
        paths: {
            'app/*': 'app/*',
            "*": "node_modules/*",
            "@angular/core": "node_modules/@angular/core/index.js",
            "@angular/http": "node_modules/@angular/http/index.js",
            "@angular/compiler": "node_modules/@angular/compiler/index.js",
            "@angular/common": "node_modules/@angular/common/index.js",
            "@angular/router": "node_modules/@angular/router/index.js",
            "@angular/platform-browser": "node_modules/@angular/platform-browser/index.js",
            "@angular/platform-browser-dynamic": "node_modules/@angular/platform-browser-dynamic/index.js",
            "ionic-angular": "node_modules/ionic-angular/index.js",
            "ionic-native": "node_modules/ionic-native/dist/index.js"
        },
        "defaultJSExtensions": true

    });
} (this);
