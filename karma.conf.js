//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'src/*.js',
      'src/components/*.js',
      'src/components/**/*.js',
      'src/config/*.js',
      'src/config/**/*.js',
      'src/editContact/*.js',
      'src/editContact/**/*.js',
      'src/home/*.js',
      'src/home/**/*.js',
      'src/services/*.js',
      'src/services/**/*.js',
      'tests/**/*.js'
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],

    plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
