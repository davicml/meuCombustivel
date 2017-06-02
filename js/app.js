angular.module('meuCombustivel', ['ui.router', 'firebase']);

angular.module('meuCombustivel').controller("CadastroController", CadastroController);
angular.module('meuCombustivel').controller("LoginController", LoginController);
angular.module('meuCombustivel').controller("IndicadoresController", IndicadoresController);
angular.module('meuCombustivel').controller("NovoAbastecimentoController", NovoAbastecimentoController);
angular.module('meuCombustivel').controller("EditaUsuarioController", EditaUsuarioController);
angular.module('meuCombustivel').controller("EditaAbastecimentoController", EditaAbastecimentoController);

angular.module('meuCombustivel').config(rotas);
