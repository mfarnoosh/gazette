angular.module('myApp')
    .directive('header', function () {
        return {
            restrict:'A',
            replace: true,
            templateUrl: '/gazette/resources/app/header/header.html',
            controller: 'HeaderController',
            controllerAs: 'header'
        }
    });