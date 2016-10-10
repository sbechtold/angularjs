function TeamComponentController() {
    var vm = this;
    // Add a calculated property for the full league name (concatenating the league and the division for the team)
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