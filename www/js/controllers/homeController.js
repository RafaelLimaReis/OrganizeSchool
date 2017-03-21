angular.module('starter').controller('homeController', function($rootScope,$scope,$ionicPopup) {
  $scope.alertProva = function(){
    var popupSucesso = $ionicPopup.alert({
        title: '<h1 class="textoBotao">Aviso!</h1>',
        template: '<div style="text-align: center;">Nenhuma prova para hoje!</div>'
    });
  };
});
