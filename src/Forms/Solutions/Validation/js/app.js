angular.module("productApp", [
    "ngRoute",
    "productApp.controllers",
    "ui.router",
    "redbox.framework.meta",
    "redbox.branding",
    "redbox.shell"
])
    .config(["$routeProvider", "$locationProvider", function($routeProvider) {
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
    }]);