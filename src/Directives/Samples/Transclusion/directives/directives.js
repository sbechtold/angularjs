angular.module("myApp.directives", [])
    .directive("pane", [function () {
        return {
            templateUrl:"directives/partials/pane-template.html",
            restrict:"E",
            transclude:false,
            scope: {
                header:"=",
                subTitle:"=?"
            }
        };
    }]);
