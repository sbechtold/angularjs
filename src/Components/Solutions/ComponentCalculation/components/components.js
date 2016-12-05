function TeamComponentController() {
    var vm = this;
    vm.fullLeague = vm.team.League + ' ' + vm.team.Division;
}

angular.module("myApp.components", [])
    .component("teamComponent", {
        templateUrl: "components/partials/teamComponent.html",
        controller: TeamComponentController,
        controllerAs: "$ctrl",
        bindings: {
            team: "="
        }
    })
    .component("teamcomponent", {
        templateUrl: "components/partials/teamComponent.html",
        controller: TeamComponentController,
        controllerAs: "$ctrl",
        bindings: {
            team: "="
        }
    });
