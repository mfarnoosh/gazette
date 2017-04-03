angular.module('myApp')
    .controller('UploadController', ['$scope', '$timeout', 'Upload', 'growl', 'uploadService',
        function ($scope, $timeout, Upload, growl, uploadService) {
            var $ctrl = this;

            $ctrl.percentage = 0;
            this.uploadFiles = function ($file, $invalidFiles) {
                alert('salam golabi');
            };

            $scope.$watch('file', function () {
                $ctrl.upload($scope.file);
            });

            this.upload = function (file) {
                if (file) {
                    if (!file.$error) {
                        uploadService.digestFile(file)
                            .then(function (result) {
                                mamad = result;
                            });
                        /*Upload.upload({
                         url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                         data: {
                         username: $scope.username,
                         file: file
                         }
                         }).then(function (resp) {
                         growl.info('file uploaded successfully.', {title: 'Info'});
                         uploadService.digestFile(file);

                         // $timeout(function () {
                         //     $scope.log = 'file: ' +
                         //         resp.config.data.file.name +
                         //         ', Response: ' + JSON.stringify(resp.data) +
                         //         '\n' + $scope.log;
                         // });
                         }, null, function (evt) {
                         $ctrl.percentage = parseInt(100.0 * evt.loaded / evt.total);
                         $scope.log = 'progress: ' + this.percentage + '% ' + evt.config.data.file.name + '\n' + $scope.log;
                         });*/
                    }

                }
            };


        }]);
var mamad;