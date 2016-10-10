function TeamComponentController() {
}

angular.module("myApp.components", [])
    .component("teamComponent", {
        templateUrl: "components/partials/teamComponent.html",
        controller: TeamComponentController,
        controllerAs: "$ctrl",
        bindings: {
            team: "="
        }
    });