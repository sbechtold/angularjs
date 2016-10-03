function Routes($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'app/home/home.tpl.html',
        controller: 'HomeController',
        controllerAs: 'homeCtrl'
    });

    $stateProvider.state('forms', {
        url: 'forms',
        templateUrl: 'app/form/form.tpl.html',
        controller: 'FormController',
        controllerAs: 'formCtrl'
    });

    $stateProvider.state('accordions', {
        url: 'accordions',
        templateUrl: 'app/accordion/accordion.tpl.html',
        controller: 'AccordionController',
        controllerAs: 'accordionCtrl'
    });
}

function AccordionController() {
    var vm = this;
    vm.groups = [
        {
            name: 'First drawer',
            contentTitle: 'I am first drawer\'s content',
            isOpen: false
        },
        {
            name: 'Second drawer',
            contentTitle: 'I am second drawer\'s content',
            isOpen: false
        },
        {
            name: 'Third drawer',
            contentTitle: 'I am third drawer\'s content',
            isOpen: false
        },
        {
            name: 'Fourth drawer',
            contentTitle: 'I am fourth drawer\'s content',
            isOpen: false
        }
    ];
}

function FormController() {
    var vm = this;
    vm.testDate = new Date();
}

function HomeController() {
    var vm = this;
    vm.tiles = [{
        "id": "accordions",
        "title": "Accordions",
        "desc": "Accordions",
        "link": "accordions",
        "linkText": "view accordions",
        "url": "app/tiles/mainTile.tpl.html",
        "show": true,
        "order": "a"
    }, {
        "id": "forms",
        "title": "Forms",
        "desc": "Redbox offers a number of form controls out of the box.",
        "link": "forms",
        "linkText": "view form elements",
        "url": "app/tiles/mainTile.tpl.html",
        "show": true,
        "order": "b"
    }];
}

/*
angular.module('redbox.ext.shared.services')
    .config(DecoratedUserIdentityService);

angular.module('redbox.ext.shared.services')
    .config(DecoratedSessionService);
*/

angular.module('training.main', [
    'ngSanitize',
    //'ngMessages',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'redbox.shared.utils',
    'redbox.framework.directives',
    //'redbox.framework.configuration',
    'redbox.shared.services',
    'adp.ng.language',
    'adp.ng.ui.modal',
    'adp.ng.meta',
    'redbox.framework',
    'redbox.framework.footer',
    'redbox.framework.components',
    'redbox.framework.meta',
    'redbox.branding',
    //'redbox.framework.templates',
    //'redbox.framework.ext.templates',
    'redbox.legal',
    'redbox.shell',
    //'ui.grid',
    //'ui.grid.infiniteScroll',
    //'benefits.redbox.core',
    'ngMockE2E'
])
    .controller('HomeController', HomeController)
    .controller('FormController', FormController)
    .controller('AccordionController', AccordionController)
    .config(Routes)
    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }])
    .run(function($httpBackend) {
        $httpBackend.whenGET(/.*/).passThrough();
        $httpBackend.whenPOST(/.*/).passThrough();
        $httpBackend.whenPUT(/.*/).passThrough();
    });