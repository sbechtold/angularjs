angular.module("statesApp.controllers", ["statesApp.services"])
    .controller("AppController", ["$scope", "$location", function ($scope, $location) {
        $scope.go = function (path) {
            $location.path(path);
        };
    }])
    .controller("ListController", ["$scope", "stateService", function ($scope, stateService) {
        var vm = this;
        vm.tiles = [];
        vm.states = stateService.all();
        vm.states.$promise.catch(function (params) {
            console.error("An error occurred querying server");
        });

        vm.selectState = function (state) {
            $scope.go("/details/" + state._id);
        };
    }])
    .controller("DetailController", ["$scope", "$routeParams", "stateService", function ($scope, $routeParams, stateService) {
        var vm = this;
        vm.isUpdating = false;
        if ($routeParams.id) {
            vm.state = stateService.getById($routeParams.id);
            vm.state.$promise.then(function (res) {
                if (res) vm.isUpdating = true;
            }).catch(function (params) {
                console.error("An error occurred fetching state");
            });
        }
        else {
            vm.state = stateService.build();
        }

        vm.save = function () {
            vm.state._id = vm.state.abbreviation;
            vm.state = stateService.save(vm.state);
            vm.state.$promise.then(function (result) {
                $scope.go("/");
            }).catch(function (params) {
                console.error("An error occurred deleting a state");
            });
        };


        vm.delete = function () {
            stateService.delete(vm.state).then(function (res) {
                $scope.go("/");
            }).catch(function (params) {
                console.error("An error occurred deleting a state");
            });
        };
    }]);