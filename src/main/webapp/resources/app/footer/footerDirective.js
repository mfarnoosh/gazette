angular.module('myApp')
    .directive('footer', function () {
        return {
            restrict:'A',
            replace: true,
            templateUrl: '/gazette/resources/app/footer/footer.html',
            controller: 'FooterController',
            controllerAs: 'footer'
        }
    });