var app = angular.module("myRepeater", []);

app.controller("MainController", [function () {
  var vm = this;
  vm.numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
}]);
