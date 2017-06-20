function LoginController($scope, $firebaseAuth, $state, $firebase){
    var mostrarLogin = document.querySelectorAll("nav");
    var auth = $firebaseAuth();
    var provider = new firebase.auth.FacebookAuthProvider();
    var statusLoginFace = {};
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

    function loginFace(){
      FB.getLoginStatus(function(statusLoginFace) {
          // statusChangeCallback(statusLoginFace);
          console.log(statusLoginFace);
      });

    }


}
