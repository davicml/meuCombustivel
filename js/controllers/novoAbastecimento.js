function NovoAbastecimentoController($scope, $firebaseAuth, $state, $firebaseObject){
  var auth = $firebaseAuth();
  var obj;
  $scope.dados = {};
  $scope.cadastrarAbastecimento = cadastrarAbastecimento;

  function cadastrarAbastecimento(){

    var abastecimento = {
      data: $scope.dados.data,
      km: $scope.dados.km,
      litros: $scope.dados.litros,
      posto: $scope.dados.posto,
      tipoCombustivel: $scope.dados.tipoCombustivel,
      valor: $scope.dados.valor
    };

    if(!obj.abastecimentos){
      obj.abastecimentos = [];
    }
      obj.abastecimentos.push(abastecimento);
      obj.$save();

    $state.go('indicadores');

  }
  auth.$onAuthStateChanged(buscarStatus);

  function buscarStatus(firebaseUser){
    if(!firebaseUser){
      $state.go('login');
      return;
    }

    ref = firebase.database().ref('usuarios').child(firebaseUser.uid);
    obj = $firebaseObject(ref);


  }
}
