function IndicadoresController($scope, $firebaseAuth, $state){
    // var auth = $firebaseAuth();
    // var ref;
    //
    // $scope.novaLista = null;

    // $scope.logout = logout;

    // auth.$onAuthStateChanged(buscarStatus);

    // function buscarStatus(firebaseUser){
    //
    //     if (! firebaseUser){
    //         return;
    //     }
    //
    //     $scope.usuario = firebaseUser;
    //     ref = firebase.database().ref('usuarios').child($scope.usuario.uid);
    //     $scope.listas = $firebaseArray(ref);
    // }

    function logout(){
        console.log(2);
        // auth.$signOut();
        $state.go('login');
    }

    function novoAbastecimento(){
        $state.go('novoAbastecimento');
        // var lista = {
        //     nome: $scope.novaLista
        // };
        //
        // $scope.listas.$add(lista);
    }
}
