function NovoAbastecimentoController($scope, $firebaseAuth, $state){
    // var auth = $firebaseAuth();
    // $scope.dados = {};
    // $scope.cadastrar = cadastrar;
    //
    function cadastrarAbastecimento(){
        // console.log(3);
        // auth.$createUserWithEmailAndPassword($scope.dados.email, $scope.dados.senha)
        // .then(function(firebaseUser) {
            $state.go('indicadores');
        // }).catch(function(error) {
        //     console.log(error)
        // });
    }
}
