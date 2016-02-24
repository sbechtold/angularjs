var data = [
       { "Name":"Pirates", "League":"NL", "Division":"Central", "Wins":100, "Loses":100 },
   ];




var app = angular.module("myRepeater", []);

app.controller("MainController", function ($scope) {
   $scope.people = [
       { "Name":"Bob", "Age":23, "Gender":"Male" },
       { "Name":"Chuck", "Age":31, "Gender":"Male" },
       { "Name":"John", "Age":25, "Gender":"Male" },
       { "Name":"Kate", "Age":42, "Gender":"Female" },
       { "Name":"Abigail", "Age":32, "Gender":"Female" },
       { "Name":"Doris", "Age":26, "Gender":"Female" },
       { "Name":"Jean", "Age":37, "Gender":"Male" }
   ];

});