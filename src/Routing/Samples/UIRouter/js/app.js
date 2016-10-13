angular.module("myUIRouter", ["ui.router", "myUIRouter.controllers"])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
         $stateProvider.state( 'search', {
                url         : '/',
                templateUrl : 'pages/search.html'
            } )
            .state( 'search.list', {
                url         : '^/list',
                controller  : "ListController",
                templateUrl : 'pages/list.html'
            } )
            .state( 'search.alt', {
                url         : '^/alt-list',
                templateUrl : 'pages/alt-list.html'
            } )
            .state( 'search.list.detail', {
                url         : '^/list/details/:id',
                templateUrl : 'pages/detail.html',
                controller: 'DetailController'
            } );

            $urlRouterProvider.otherwise( '/' );
            //$locationProvider.html5Mode(true);
    }]);
