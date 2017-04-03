'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: '/gazette/resources/app/view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

myApp.controller('View1Ctrl', [function() {

}]);