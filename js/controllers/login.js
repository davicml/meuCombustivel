function LoginController($scope, $firebaseAuth, $state){
    var auth = $firebaseAuth();
    $scope.dados = {};
    $scope.login = login;

    function login(){
        auth.$signInWithEmailAndPassword($scope.dados.email, $scope.dados.senha)
        .then(function(firebaseUser) {
            $state.go('indicadores');
        }).catch(function(error) {
            console.log(error)
        });
    }
}
