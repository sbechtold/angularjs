

angular.module("myApp.components", [])
    .component("teamComponent", {
        templateUrl: "components/partials/teamComponent.html",
        controller: [function() {

            console.log(this.team.Name);
        }],
        controllerAs: "$ctrl",
        bindings: {
            team: "="
        }
    });
