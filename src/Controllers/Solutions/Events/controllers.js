/*
Using the data, controller, and modules below

You want to add three event handlers
    One for adding a team
    One for removing a team that accepts a team as an arguement
    One for restoring all deleted teams

You will also need a way to manage the assignemnt of the ID field on the team
when it has been added. This ID needs to be unique.
*/


var data = [
       { "Name":"Pirates", "League":"NL", "Division":"Central", "Wins":101, "Loses":49, "Id":1 },
       { "Name":"Cardinals", "League":"NL", "Division":"Central", "Wins":49, "Loses":101, "Id":2 },
       { "Name":"Brewers", "League":"NL", "Division":"Central", "Wins":78, "Loses":82, "Id":3 },
       { "Name":"Cubs", "League":"NL", "Division":"Central", "Wins":70, "Loses":90, "Id":4 },
       { "Name":"Reds", "League":"NL", "Division":"Central", "Wins":85, "Loses":75, "Id":5 }
   ];

var app = angular.module("myTeamApp", []);
app.controller("ListController", ["$log", function ($log) {
    var vm = this;
    vm.teams = data;
    vm.deleted = [];
    vm.newTeam = {};

    vm.teamSequenceId = vm.teams.length;

    vm.addTeam = function () {
        vm.teamSequenceId++;
        vm.newTeam.Id = vm.teamSequenceId;
        vm.teams.push(vm.newTeam);
        $log.info("Team with ID:" + vm.teamSequenceId + " Has been added");

        vm.newTeam = {};
    };

    vm.removeTeam = function (team) {
        var location = vm.teams.indexOf(team);
        if (location > -1) {
            vm.deleted.push(vm.teams[location]);
            vm.teams.splice(location, 1);
        }
    };

    vm.restoreAll = function () {
        // Angular uses a lite version of underscore. Works as a foreach statement
        // you give it an array and an interator receiver which does work
        // for each record within the array.
        vm.deleted.forEach(function (one) {
            vm.teams.push(one);
        });
        vm.deleted = [];
    };
}]);
