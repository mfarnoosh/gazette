angular.module('myApp.home', [])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {templateUrl: '/gazette/resources/app/home/home.html', controller: 'HomeController'})
    }])
    .controller('HomeController', [
        '$scope',
        function ($scope) {
            this.myTest = 'THIS IS HOME';
            this.isCollapsed1 = true;
            this.isCollapsed2 = true;
        }]);