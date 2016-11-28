(function(){
angular
    .module('gha.repo')
    .controller('reposCtrl', ['$scope', '$q', '$rootScope', 'dataSvc', reposCtrl]);

function reposCtrl($scope, $q, $rootScope, dataSvc){

    /* Authorization not working without cors

     $rootScope.oauth = oauth;

     function oauth(){
     $window.open('https://github.com/login/oauth/authorize?client_id=1a44ff86212246df5cfc&scopes=repo,delete_repo', 'width=700,height=700')
     }

     var authCode = getAuthCode($window.location.href);

     function getAuthCode(url){
     if (/code/.test(url)){
     var cod = url.match(/[&\?]code=([\w\/\-]+)/)[1],
     error = url.match(/[&\?]error=([^&]+)/);
     if (error){
     throw 'Error getting authorization code: ' + error[1];
     return;
     }
     console.log(cod);
     return cod;
     }
     }

     var authToken = getAuthToken(authCode);

     function getAuthToken(authCode){
     if(authCode){
     var params = {
     client_id: '1a44ff86212246df5cfc',
     client_secret: 'a776bc184e0529601f20e1224ff8e2b7049ef639',
     code: authCode
     };
     return $http.post('https://github.com/login/oauth/access_token', params).success(callback);
     function callback(data){
     var token = data;
     console.log(token);
     }
     }
     }
     */
    $rootScope.auth = auth;

    function auth(username){
        if(username){
            dataSvc.setName(username);
            $scope.userIsLogined = true;
            $q.all([dataSvc.getUser(), dataSvc.getUserRepo()]).then(callback);
            function callback(data){
                $rootScope.userData = data[0];
                $scope.repoData = data[1].data;
            }
        }
    }

    $scope.createRepo = create;

    function create(token, nameRepo){
        if(nameRepo){
            return dataSvc.createNewRepo(token, nameRepo).then(callback);
            function callback(data){
                $scope.repoData.push(data.data);
            }
        }
    }

    $scope.editRepo = edit;

    function edit(token, newNameRepo, nameRepo){
        if(nameRepo, newNameRepo){
            return dataSvc.editRepo(token, newNameRepo, nameRepo).then(callback);
            function callback(data){
                $scope.repoData.splice($scope.repoData.indexOf(nameRepo));
                $scope.repoData.push(data.data);
            }
        }
    }

    $scope.deleteRepo = del;

    function del(token, newNameRepo){
        var callbackData;
        if(newNameRepo){
            return dataSvc.deleteRepo(token, newNameRepo).then(callback);
            function callback(data){
                $scope.repoData.splice($scope.repoData.indexOf(newNameRepo));
                callbackData = data;
            }
        }
    }

}
    
})();