(function(){
angular
    .module('gha.repo', [])
    .config(configRepo);

function configRepo($routeProvider){

    $routeProvider

        .when('/', {
            templateUrl: 'pages/repo/templates/repos.html',
            controller: 'reposCtrl',
        })
}

})();