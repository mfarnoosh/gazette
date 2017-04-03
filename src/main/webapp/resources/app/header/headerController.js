angular.module('myApp')
    .controller('HeaderController', ['$scope','$mdSidenav','$uibModal', function ($scope,$mdSidenav,$uibModal) {
        this.title='Gazette';

        this.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        this.signup = function () {
            var modalInstance = $uibModal.open({
                animation: true,
                size:'md',
                templateUrl: '/gazette/resources/app/signup/signup.html',
                controller: 'SignupController',
                controllerAs: 'signup',
                resolve: {
                    userData2: function(){
                        return 'asdas111';
                    }
                }
            });
            modalInstance.result.then(function (userData) {
                alert(userData.email + '-' + userData.password + '-' + userData.confirmPassword);
            },function () {
                // alert('cancel');
            });
        };
    }]);