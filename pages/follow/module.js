(function(){
angular
    .module('gha.follow', [])
    .config(configFollow);

function configFollow($routeProvider){

    $routeProvider
        
        .when('/following', {
            templateUrl: 'pages/follow/templates/follow.html',
            controller: 'followingCtrl',
            resolve: {
                initData: function (dataSvc) {
                    return dataSvc.getUserFollowing();
                }
            }
        })
    
}

})();