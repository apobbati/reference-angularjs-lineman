(function() {
  'use strict';

  angular
    .module('myapp.home')
    .controller('HomeCtrl', function($scope) {
      $scope.message = 'A Message';
    });

})();
