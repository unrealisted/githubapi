(function(){
    angular
        .module('gha.repo')
        .filter('repoFilter', repoFilter);

    function repoFilter(){
        return function (items, letter) {
            if(items != undefined){
                var filtered = [],
                    letterMatch = new RegExp(letter, 'i'),
                    item;
                for (var i = 0; i < items.length; i++) {
                    item = items[i];
                    if (letterMatch.test(item.name.substring(0, 5))) {
                        filtered.push(item);
                    }
                }
                return filtered;
            }
        }
    }

})();