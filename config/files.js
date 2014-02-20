/* Exports a function which returns an object that overrides the default &
 *   plugin file patterns (used widely through the app configuration)
 *
 * To see the default definitions for Lineman's file paths and globs, see:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/files.coffee
 */
module.exports = function(lineman) {
  //Override file patterns here
  return {
    js: {
      vendor: [
        "vendor/js/**/*.js",
        "vendor/bower/jquery/dist/jquery.js",
        "vendor/bower/angular/angular.js",
        "vendor/bower/angular-route/angular-route.js",
        "vendor/bower/angular-ui-router/release/angular-ui-router.js",
        "vendor/bower/bootstrap/js/bootstrap.js",
        "vendor/bower/bower-breeze/breeze.debug.js",
        "vendor/bower/restangular/dist/restangular.js"
      ],
      app: [
        "app/js/**/module.js",
        "app/js/**/*.js"
      ]
    },

//    webfonts: {
//      vendor: [
//        "vendor/bower/bootstrap/dist/fonts/glyphicons-halflings-regular.eot"
//      ]
//    },

    less: {
      compile: {
        options: {
          paths: [
            "vendor/css/**/*.css",
            "vendor/bower/font-awesome/css/font-awesome.css",
            "vendor/bower/bootstrap/dist/css/bootstrap.css",
            "app/css/**/*.less"
          ]
        }
      }
    }
  };
};
