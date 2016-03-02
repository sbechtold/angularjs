angular.module("myApp", ["myApp.directives"])
    .controller("HomeController", function ($scope) {
        $scope.message = "Hello World";
    });