function IndicadoresController($scope, $firebaseObject, $state, $firebaseAuth, $firebase ){

    var auth = $firebaseAuth();
    var ref;

    $scope.logout = logout;
    $scope.novoAbastecimento = novoAbastecimento;
    $scope.dado = [];

    auth.$onAuthStateChanged(buscarStatus);

    function buscarStatus(firebaseUser){
      if(!firebaseUser){
        $state.go('login');
        return;
      }
      $scope.usuario = firebaseUser;
      ref = firebase.database().ref('usuarios').child($scope.usuario.uid);

      var obj = $firebaseObject(ref);
      obj.$loaded()
        .then(function(data) {
        })
        .catch(function(error) {
          console.error("Error:", error);
        });
        $scope.dados = obj;
    }

    function logout(){
        auth.$signOut();
        $state.go('login');
    }

    function novoAbastecimento(){
        $state.go('novoAbastecimento');

    }
}
