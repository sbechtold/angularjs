angular.module("statesApp", [
    "ngRoute",
    "statesApp.controllers",
    "angularJsClass.directives",
    "ui.router",
    "redbox.framework.meta",
    "redbox.branding",
    "redbox.shell"
])
    .config(["$routeProvider", "$locationProvider", function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "pages/list.html",
                controller: "ListController"
            })
            .when("/details/:id?", {
                templateUrl : "pages/detail.html",
                controller: "DetailController"
            })
            .otherwise({
                redirectTo: '/'
            });
            
            //$locationProvider.html5Mode(true)
    }]);