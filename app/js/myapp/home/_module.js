(function() {
  'use strict';

  angular
    .module('myapp.home', ['ui.router', 'ui.state'])
    .config(function($stateProvider) {
      $stateProvider
        .state('home', {
          url: '',
          templateUrl: 'myapp/home/home.tpl.html',
          controller: 'HomeCtrl'
        });
    })
    .run(function() {

    });
})();
