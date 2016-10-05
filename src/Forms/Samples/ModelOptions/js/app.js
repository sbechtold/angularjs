angular.module("statesApp", [
    "ngRoute",
    "statesApp.controllers",
    "ngSanitize",
    //"ngMessages",
    "ngResource",
    "ui.router",
    "ui.bootstrap",
    "redbox.shared.utils",
    "redbox.framework.directives",
    //"redbox.framework.configuration",
    "redbox.shared.services",
    "adp.ng.language",
    "adp.ng.ui.modal",
    "adp.ng.meta",
    "redbox.framework",
    "redbox.framework.footer",
    "redbox.framework.components",
    "redbox.framework.meta",
    "redbox.branding",
    //"redbox.framework.templates",
    //"redbox.framework.ext.templates",
    "redbox.legal",
    "redbox.shell"
    //"ui.grid",
    //"ui.grid.infiniteScroll",
    //"benefits.redbox.core",
])
.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
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