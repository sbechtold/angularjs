angular.module("myNgRouter", ["ngRoute", "myNgRouter.controllers"])
    .config(["$routeProvider", function($routeProvider) {
        $routeProvider
            .when({
                templateUrl : "/",
                controller: "HomeController"
            })
            .when({
                templateUrl : "/person/:pid",
                controller: "DetailController"
            })
            .otherwise("/");
    }]);