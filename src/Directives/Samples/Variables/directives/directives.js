angular.module("myApp.directives", [])
    .directive("dependent", [function () {
        return {
            templateUrl:"directives/partials/list-template.html",
            restrict:"E"
        };  
    }])
    .directive("isolate", [function () {
        return {
            templateUrl:"directives/partials/list-template.html",
            restrict:"E",
            scope: {
                message:"=",
                alias:"=message",
                literal:"@message"
            }
        };  
    }]);
    