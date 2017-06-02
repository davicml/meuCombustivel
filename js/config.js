function rotas($stateProvider, $urlRouterProvider){
    $stateProvider.state('login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController',
        url: '/login'
    });

    $stateProvider.state('cadastro', {
        templateUrl: 'templates/cadastro.html',
        controller: 'CadastroController',
        url: '/cadastro'
    });

    $stateProvider.state('indicadores', {
        templateUrl: 'templates/indicadores.html',
        controller: 'IndicadoresController',
        url: '/indicadores'
    });

    $stateProvider.state('novoAbastecimento', {
        templateUrl: 'templates/novoAbastecimento.html',
        controller: 'NovoAbastecimentoController',
        url: '/novoAbastecimento'
    });

    // $stateProvider.state('editaUsuario', {
    //     templateUrl: 'templates/editaUsuario.html',
    //     controller: 'EditaUsuarioController',
    //     url: '/editaUsuario'
    // });
    //
    // $stateProvider.state('editaAbastecimento', {
    //     templateUrl: 'templates/editaAbastecimento.html',
    //     controller: 'EditaAbastecimentoController',
    //     url: '/editaAbastecimento'
    // });

    $urlRouterProvider.otherwise('/login');
}
