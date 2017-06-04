function MenuLateralController($scope, $state){

  $scope.novoAbastecimento = novoAbastecimento;

  function novoAbastecimento(){
    console.log(1);
    $state.go('novoAbastecimento');

  }
}
