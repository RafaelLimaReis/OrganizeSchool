angular.module('starter')
.controller('userController', function($scope,$rootScope, $state){
  $rootScope.dadosUsers = [
    {nome:'Denis o Pimentinha',curso:'Sistemas de Informação'}
  ]
  $scope.logar = function(){
    $state.go('menu.home'); //enviar para rota home
  };
});
