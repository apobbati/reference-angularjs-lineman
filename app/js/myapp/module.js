(function() {
  'use strict';

  angular
    .module('myapp', ['myapp.home'])
    .config(function() {
      console.log('configuring myapp');
    })
    .run(function() {
      console.log('myapp is running');
    });
})();
