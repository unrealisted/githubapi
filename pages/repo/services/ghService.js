(function(){
    angular
        .module('gha.repo')
        .factory('dataSvc', dataSvc);

    function dataSvc ($http, $q){

        return {
            setName: setName,
            getUser: getUser,
            getUserRepo: getUserRepo,
            getUserFollowing: getUserFollowing,
            createNewRepo: createNewRepo,
            editRepo: editRepo,
            deleteRepo: deleteRepo
        };

        function setName(name){
            _name = name;
        }

        function getUser(){
            var deferred = $q.defer();
            $http.get('https://api.github.com/users/' + _name).success(defRes).error(defRej);
            function defRes(resolve){
                deferred.resolve(resolve);
            }
            function defRej(statusError){
                deferred.reject(statusError);
            }
            return deferred.promise;
        }

        function getUserRepo(){
            var deferred = $q.defer();
            return $http.get('https://api.github.com/users/' + _name + '/repos').error(reject);
            function reject(e){
                console.log(e);
            }
        }

        function getUserFollowing(){
            var deferred = $q.defer();
            $http.get('https://api.github.com/users/' + _name + '/following').success(defRes).error(defRej);
            function defRes(resolve){
                deferred.resolve(resolve);
            }
            function defRej(statusError){
                deferred.reject(statusError);
            }
            return deferred.promise;
        }

        function createNewRepo(token, nameRepo){
            var params = {name: nameRepo};
            return $http.post('https://api.github.com/user/repos', params, {headers:{'Authorization': 'token ' + token}}).error(reject);
            function reject(e){
                console.log(e);
            }
        }

        function editRepo(token, newNameRepo, nameRepo){
            var params = {name: newNameRepo};
            return $http.patch('https://api.github.com/repos/' + _name + '/' + nameRepo, params, {headers:{'Authorization': 'token ' + token}}).error(reject);
            function reject(e){
                console.log(e);
            }
        }

        function deleteRepo(token, newNameRepo){
            return $http.delete('https://api.github.com/repos/' + _name + '/' + newNameRepo, {headers:{'Authorization': 'token ' + token}}).error(reject);
            function reject(e){
                console.log(e);
            }
        }

    }
    
})();