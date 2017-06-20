var app = angular.module('meuCombustivel', []);

function showLoginController($scope, $firebaseAuth){
  $scope.myValue = 0;

}
app.controller('showLoginController', showLoginController);
