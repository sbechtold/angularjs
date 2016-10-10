angular.module("statesApp", ["ngRoute", "ngMessages", "statesApp.controllers", "statesApp.directives", "angularJsClass.directives"])
    .config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "pages/list.html",
                controller: "ListController",
                controllerAs: "ListCtrl"
            })
            .when("/details/:id?", {
                templateUrl : "pages/detail.html",
                controller: "DetailController",
                controllerAs: "DetailCtrl"
            })
            .otherwise({
                redirectTo: '/'
            });
            
            //$locationProvider.html5Mode(true)
    }]);