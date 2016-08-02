module.exports = function (config) {
    'use strict';

    config.set({

    	basePath: '',

    	files: [
            "app/bower_components/angular/angular.js",
            "app/bower_components/angular-ui-router/release/angular-ui-router.js",
            "app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
            "app/bower_components/angular-google-maps/dist/angular-google-maps.min.js",
            "app/bower_components/lodash/dist/lodash.min.js",
            "app/bower_components/angular-simple-logger/dist/angular-simple-logger.min.js",
            "app.js",
        ],

        frameworks: ['jasmine'],

        // test results reporter to use
        // possible values: dots || progress || growl
        reporters: ['progress'],

    	port: 8080,

        // cli runner port
        runnerPort: 9100,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: ['Chrome', 'Firefox'],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false

    });
};
