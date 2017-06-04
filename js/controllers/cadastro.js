function CadastroController($scope, $firebaseAuth, $firebaseArray, $state, $firebaseObject){
    var auth = $firebaseAuth();
    var ref = firebase.database().ref('usuarios'); //Criar a referência da variavel no banco de dados
    var usuarios = $firebaseArray(ref); // Referencia o vetor com as informacoes do usuario
    $scope.dados = {};
    $scope.cadastrar = cadastrar;

    function cadastrar(){
        auth.$createUserWithEmailAndPassword($scope.dados.email, $scope.dados.senha)
        .then(function(firebaseUser) {


          auth.$onAuthStateChanged(buscarStatus);

          function buscarStatus(firebaseUser){
            if(!firebaseUser){
              return;
            }
            $scope.usuarios = firebaseUser;

            var usuario = {  // filtra as informacoes que serao adicionados ao banco de dados. Usado para não salvar a senha aberta
              nome: $scope.dados.nome,
              marca: $scope.dados.marca,
              ano: $scope.dados.ano,
              uid: $scope.usuarios.uid
            }
            usuarios.$add(usuario);
          }


          $state.go('indicadores');
        }).catch(function(error) {
         console.log(error)
        });
    }
}
