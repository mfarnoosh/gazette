angular.module('myApp')
    .directive('upload', function () {
        return {
            restrict:'A',
            replace: true,
            templateUrl: '/gazette/resources/app/upload/upload.html',
            controller: 'UploadController',
            controllerAs: 'upload'
        }
    });