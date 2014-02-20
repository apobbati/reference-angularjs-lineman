(function() {
  'use strict';

  angular
    .module('myapp', ['myapp.home'])
    .run(function() {
      console.log('myapp is running');
    }).config(function() {
      console.log('configuring myapp');
    });
})();
