function EditaUsuarioController($scope, $firebaseAuth, $state){
    var auth = $firebaseAuth();
    $scope.dados = {};
    $scope.editaUsuario = editaUsuario;

    function editaUsuario(){
        // auth.$createUserWithEmailAndPassword($scope.dados.email, $scope.dados.senha)
        // .then(function(firebaseUser) {
        //     $state.go('quadro');
        // }).catch(function(error) {
        //     console.log(error)
        // });
    }
}
