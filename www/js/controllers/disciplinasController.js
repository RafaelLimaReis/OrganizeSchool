angular.module('starter').controller('disciplinasController', function($rootScope,$scope,$ionicPopup) {

//itens para ordenar e deslizar
  $scope.data = {
    showorder :false, //desativar botao de reordem
    swipe :true //ativar deslize de tela
  };

//dados estaticos de disciplinas
  $rootScope.disciplinas = [
    {nome:'Programação Web',sigla:'PrWeb',prof:'Daniel'},
    {nome:'Banco de Dados',sigla:'BD',prof:'Geraldo'},
    {nome:'Inteligencia Artificial',sigla:'IA',prof:'Jaqueline'},
    {nome:'Calculo',sigla:'Calc',prof:'Leticia'},
    {nome:'Inglês Instrumental',sigla:'IngIns',prof:'Marcia'},
    {nome:'Estrutura de Dados',sigla:'EDados',prof:'Jaqueline'}
  ]; //objeto disciplina

  $scope.remover = function(disciplina) {
  $scope.disciplinas.splice($scope.disciplinas.indexOf(disciplina), 1);
};
$scope.moveItem = function(disciplina, fromIndex, toIndex) {
  //Move the item in the array
  $scope.disciplinas.splice(fromIndex, 1);
  $scope.disciplinas.splice(toIndex, 0, disciplina);
};

//Nova disciplina
  $scope.cadDisciplina = function(){
    var popupSucesso = $ionicPopup.alert({
        title: '<h1 class="textoBotao">Sucesso!</h1>',
        template: 'Matéria cadastrada com Sucesso.'
    });
  };

});
