/* Exports a function which returns an object that overrides the default &
 *   plugin grunt configuration object.
 *
 * You can familiarize yourself with Lineman's defaults by checking out:
 *
 *   - https://github.com/linemanjs/lineman/blob/master/config/application.coffee
 *   - https://github.com/linemanjs/lineman/blob/master/config/plugins
 *
 * You can also ask Lineman's about config from the command line:
 *
 *   $ lineman config #=> to print the entire config
 *   $ lineman config concat.js #=> to see the JS config for the concat task.
 */
module.exports = function(lineman) {
  //Override application configuration here. Common examples follow in the comments.
  return {
    // grunt-angular-templates assumes your module is named "app", but
    // you can override it like so:

    ngtemplates: {
       options: {
         module: "myapp"
       }
    },

    server: {
      pushState: false,
      // API Proxying
      //
      // During development, you'll likely want to make XHR (AJAX) requests to an API on the same
      // port as your lineman development server. By enabling the API proxy and setting the port, all
      // requests for paths that don't match a static asset in ./generated will be forwarded to
      // whatever service might be running on the specified port.
      //
      apiProxy: {
         enabled: true,
         host: 'localhost',
         port: 9000
      }
    },

    uglify: {
      options: {
        compress: {
          drop_console: true // Removes console statements
        }
      }
    },

    // Configure the JavaScript Linting options
    // to help us enforce some aspects of code quality.
    jshint: {
      options: {
        undef: true,
        unused: true,
        curly: true,
        eqeqeq: true,
        eqnull: true,
        immed: true,
        latedef: false,
        noarg: true,
        nonew: true,
        newcap: true,
        sub: true,
        browser: true,
        strict: true,

        /**
         * Define globals here which are used in your application.
         * This is ONLY for libraries that expose globals which you happen
         * to be using in your application code.
         *
         * In general, do not define any global variables.
         */
        globals: {
          angular: true,
          console: true
        }
      }
    }

    // Sass
    //
    // Lineman supports Sass via grunt-contrib-sass, which requires you first
    // have Ruby installed as well as the `sass` gem. To enable it, comment out the
    // following line:
    //
    // enableSass: true

    // Asset Fingerprints
    //
    // Lineman can fingerprint your static assets by appending a hash to the filename
    // and logging a manifest of logical-to-hashed filenames in dist/assets.json
    // via grunt-asset-fingerprint
    //
    // enableAssetFingerprint: true

  };
};
