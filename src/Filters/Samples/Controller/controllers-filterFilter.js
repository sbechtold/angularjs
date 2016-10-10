var app = angular.module("myEventHandlers", []);

app.controller("MainController", ["filterFilter", "orderByFilter", function (filterFilter, orderBy) {
    var vm = this;
    vm.people = [
        {"Name": "Bob", "Age": 23, "Gender": "Male", "Id": 1},
        {"Name": "Chuck", "Age": 31, "Gender": "Male", "Id": 2},
        {"Name": "John", "Age": 25, "Gender": "Male", "Id": 3},
        {"Name": "Kate", "Age": 42, "Gender": "Female", "Id": 4},
        {"Name": "Abigail", "Age": 32, "Gender": "Female", "Id": 5},
        {"Name": "Doris", "Age": 26, "Gender": "Female", "Id": 6},
        {"Name": "Jean", "Age": 37, "Gender": "Male", "Id": 7}
    ];

    vm.people = orderBy(vm.people, "Name", true);
    vm.addPerson = {}; // Set an empty object

    vm.handleEvent = function (evt) {
        vm.lastEvent = evt.type;
    };


    vm.remove = function (person, evt) {
        vm.handleEvent(evt);

        var location = vm.people.indexOf(person);
        if (location > -1)
            vm.people.splice(location, 1);
    };

    vm.add = function (evt) {
        vm.handleEvent(evt);

        // <div ng-repeat="one in people | filter:filterObj" />
        var filter = {Name: vm.addPerson.Name};
        var result = filterFilter(vm.people, filter);
        if (result && result.length > 0) {
            console.error("An element with the given name is already present within array. Cannot add new person");
            return;
        }

        vm.people.push(vm.addPerson);
        vm.addPerson = {};

    };
}]);
