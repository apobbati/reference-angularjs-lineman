angular
  .module('myapp.home', [
    'ui.router',
    'ui.state'
  ])
  .config(function($stateProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'home.tpl.html',
        controller: 'HomeCtrl'
      });
  })
  .controller('HomeCtrl', function($scope) {
    $scope.title = 'A Title';
    $scope.message = 'A Message';
  });
