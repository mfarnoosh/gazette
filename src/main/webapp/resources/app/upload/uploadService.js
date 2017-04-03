angular.module('myApp')
    .service('uploadService', ['$http','$q', function ($http,$q) {

        this.digestFile = function(file){
            var deferred = $q.defer();
            if(file){
                    var fileReader = new FileReader();
                    fileReader.onload = function (event) {
                        result = event.target.result;
                        deferred.resolve(result);
                    };
                    fileReader.readAsBinaryString(file);
            }
            return deferred.promise;
        };
    }]);