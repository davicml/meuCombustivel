function CadastroController($scope, $firebaseAuth, $state){
    var auth = $firebaseAuth();
    $scope.dados = {};
    $scope.cadastrar = cadastrar;

    function cadastrar(){
        // auth.$createUserWithEmailAndPassword($scope.dados.email, $scope.dados.nome, $scope.dados.senha, $scope.dados.marca, $scope.dados.modelo, $scope.dados.ano)
        // .then(function(firebaseUser) {
            $state.go('indicadores');
        // }).catch(function(error) {
        //     console.log(error)
        // });
    }
}
