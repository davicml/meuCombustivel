var countAbst = 0;

function CadastroController($scope, $firebaseAuth, $firebaseObject, $state, $firebaseObject, $rootScope){
    var auth = $firebaseAuth();
    $scope.dados = {};
    $scope.cadastrar = cadastrar;

    function cadastrar(){
        auth.$createUserWithEmailAndPassword($scope.dados.email, $scope.dados.senha)
        .then(function(firebaseUser) {

            //Pegar referência do banco de dados. Criar um objeto com o uid do usuário
            //dentro do objeto usuarios, para conformidade com as regras de acesso.
            var ref = firebase.database().ref('usuarios').child(firebaseUser.uid);
            var usuario = $firebaseObject(ref);

            // Filtra as informacoes que serao adicionados ao banco de dados. Usado para não salvar a senha aberta
            usuario.nome = $scope.dados.nome;
            usuario.marca = $scope.dados.marca;
            usuario.ano = $scope.dados.ano;
            usuario.modelo = $scope.dados.modelo;
            usuario.qtdeAbastecimento = countAbst;


            usuario.$save();

            $state.go('indicadores');
        }).catch(function(error) {
            console.log(error)
        });
    }
}
