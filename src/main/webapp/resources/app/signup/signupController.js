angular.module('myApp')
    .controller('SignupController', ['$scope', '$uibModalInstance',
        function ($scope, $uibModalInstance,userData2) {
        $scope.mamad = userData2;

            $scope.userData = {
                email: '',
                password: '',
                confirmPassword: ''
            };

            $scope.ok = function () {
                $uibModalInstance.close($scope.userData);
            };
            $scope.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }]);