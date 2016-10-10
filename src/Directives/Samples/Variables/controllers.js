angular.module("myApp", ["myApp.directives"])
    .controller("HomeController", function () {
        var vm = this;
        vm.message = "Hello World";

        vm.updatedEvalution = function(val) {
            console.log("Expression Did Change", val);
        };

        vm.valueDidChange = function(val) {
            console.log("Expression was evaluated", val);
        };
    });
