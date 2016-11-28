(function(){
    angular
        .module('gha.follow')
        .controller('followingCtrl', ['$scope', '$rootScope', 'dataSvc', 'initData', followingCtrl]);

    function followingCtrl($scope, $rootScope, dataSvc, initData){

        $scope.userFollowings = initData;
        
    }
    
})();