'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
    'ngRoute',
    'ngMaterial',
    'ngAnimate',
    'ui.bootstrap',
    'ngFileUpload',
    'angular-growl',

    'myApp.view1',
    'myApp.view2',
    'myApp.version',
    'myApp.home'
]).config(['$locationProvider', '$routeProvider','$mdThemingProvider','growlProvider', function ($locationProvider, $routeProvider,$mdThemingProvider,growlProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
    $mdThemingProvider
        .theme('default')
        .primaryPalette('blue')
        .accentPalette('indigo')
        .warnPalette('yellow')
        .backgroundPalette('grey');

    growlProvider.globalTimeToLive({success: 1000, error: 2000, warning: 3000, info: 4000});
    //sample for override time to live when calling the methods
    //growl.warning("Override global ttl setting", {ttl: 10000});
    //disable/enable count down
    //growl.warning("Does not have count down timer", {disableCountDown: true});
}]);
