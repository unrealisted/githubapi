(function(){
angular
    .module('gha', [
            'ngAnimate',
            'ngRoute',
            'gha.repo',
            'gha.follow'])
    .config(config);

    function config($httpProvider, $locationProvider){
        
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $locationProvider.html5Mode({
            enabled: true
        });
        
    }
    
})();




