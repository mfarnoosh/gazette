<!DOCTYPE html>
<!--[if lt IE 7]> <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]> <html lang="en" ng-app="myApp" class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]> <html lang="en" ng-app="myApp" class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!-->
<html lang="en" ng-app="myApp" class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Gazette</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/gazette/resources/bower_components/html5-boilerplate/dist/css/normalize.css">
    <link rel="stylesheet" href="/gazette/resources/bower_components/html5-boilerplate/dist/css/main.css">
    <link rel="stylesheet" href="/gazette/resources/bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="/gazette/resources/bower_components/angular-bootstrap/ui-bootstrap-csp.css">
    <link rel="stylesheet" href="/gazette/resources/bower_components/angular-material/angular-material.min.css">
    <link rel="stylesheet" href="/gazette/resources/bower_components/angular-growl-v2/build/angular-growl.min.css">

    <link rel="stylesheet" href="/gazette/resources/app/app.css">

    <%--<script src="/gazette/resources/bower_components/html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js"></script>--%>
    <script src="/gazette/resources/bower_components/angular/angular.min.js"></script>

    <%--<script src="/gazette/resources/bower_components/angular-touch/angular-touch.js"></script>--%>
    <%--<script src="/gazette/resources/bower_components/angular-animate/angular-animate.js"></script>--%>
</head>
<body ng-cloak>
<!--[if lt IE 7]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade
    your browser</a> to improve your experience.</p>
<![endif]-->
<div growl></div>
<div header></div>
<div ng-view></div>
<div footer></div>

<script src="/gazette/resources/bower_components/angular-aria/angular-aria.min.js"></script>
<script src="/gazette/resources/bower_components/angular-animate/angular-animate.js"></script>
<script src="/gazette/resources/bower_components/angular-material/angular-material.min.js"></script>

<script src="/gazette/resources/bower_components/angular-bootstrap/ui-bootstrap.min.js"></script>
<script src="/gazette/resources/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js"></script>

<script src="/gazette/resources/bower_components/angular-route/angular-route.min.js"></script>

<script src="/gazette/resources/bower_components/angular-growl-v2/build/angular-growl.min.js"></script>

<script src="/gazette/resources/bower_components/ng-file-upload-shim/ng-file-upload-shim.min.js"></script>
<script src="/gazette/resources/bower_components/ng-file-upload/ng-file-upload.min.js"></script>

<script src="/gazette/resources/app/app.js"></script>
<script src="/gazette/resources/app/view1/view1.js"></script>
<script src="/gazette/resources/app/view2/view2.js"></script>
<script src="/gazette/resources/app/home/homeController.js"></script>

<script src="/gazette/resources/app/signup/signupController.js"></script>

<script src="/gazette/resources/app/header/headerDirective.js"></script>
<script src="/gazette/resources/app/header/headerController.js"></script>

<script src="/gazette/resources/app/footer/footerDirective.js"></script>
<script src="/gazette/resources/app/footer/footerController.js"></script>

<script src="/gazette/resources/app/upload/uploadDirective.js"></script>
<script src="/gazette/resources/app/upload/uploadController.js"></script>
<script src="/gazette/resources/app/upload/uploadService.js"></script>

<script src="/gazette/resources/app/components/version/version.js"></script>
<script src="/gazette/resources/app/components/version/version-directive.js"></script>
<script src="/gazette/resources/app/components/version/interpolate-filter.js"></script>
</body>
</html>
