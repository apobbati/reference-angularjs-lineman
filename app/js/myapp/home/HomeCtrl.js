(function() {
  'use strict';

  angular
    .module('myapp.home')
    .controller('HomeCtrl', function($scope, $q) {
      $scope.leaveVoicemail = function(acct, message) {
        console.log(acct.network + ' Number: ' + acct.number + ' said: ' + message);
      };

      $scope.accounts = [
        {
          number: '301-905-6324',
          message: 'Hello World',
          network: 'AT&T'
        },
        {
          number: '1234-905-6324',
          message: 'Hello World',
          network: 'Verizon'
        },
        {
          number: '23-905-6324',
          message: 'Hello World',
          network: 'Verizon'
        }
      ];

      var defer = $q.defer();

      defer.promise.then(function(name) {
        console.log(name + ': I promised I would show up');
      });

      defer.resolve('Abhi');
    });

})();
