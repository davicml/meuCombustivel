function IndicadoresController($scope, $firebaseObject, $state, $firebaseAuth, $firebase ){
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

    var auth = $firebaseAuth();
    var ref;

    $scope.logout = logout;
    $scope.novoAbastecimento = novoAbastecimento;


    auth.$onAuthStateChanged(buscarStatus);

    function buscarStatus(firebaseUser){
      if(!firebaseUser){
        console.log("Deslogado");
        return;
      }
      $scope.usuario = firebaseUser;
      ref = firebase.database().ref('usuarios').child($scope.usuario.uid);

      var obj = $firebaseObject(ref);
      obj.$loaded()
        .then(function(data) {
          console.log(obj); // true
        })
        .catch(function(error) {
          console.error("Error:", error);
        });

        $scope.dados = obj;
    }

    function logout(){
        console.log(2);
        auth.$signOut();
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
