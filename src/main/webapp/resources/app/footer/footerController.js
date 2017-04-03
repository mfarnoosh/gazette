angular.module('myApp')
    .controller('FooterController', ['$scope', function ($scope) {
        this.myTest = 'salam footer';
        // alert(angular.element(document.getElementById('footer')).prop('offsetTop'));
    }]);