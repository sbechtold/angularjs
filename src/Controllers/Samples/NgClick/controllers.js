var app = angular.module("myEventHandlers", []);

app.controller("MainController", [function () {
    var vm = this;
    vm.people = [
       { "Name":"Bob", "Age":23, "Gender":"Male", "Id":1 },
       { "Name":"Chuck", "Age":31, "Gender":"Male", "Id":2 },
       { "Name":"John", "Age":25, "Gender":"Male", "Id":3 },
       { "Name":"Kate", "Age":42, "Gender":"Female", "Id":4 },
       { "Name":"Abigail", "Age":32, "Gender":"Female", "Id":5 },
       { "Name":"Doris", "Age":26, "Gender":"Female", "Id":6 },
       { "Name":"Jean", "Age":37, "Gender":"Male", "Id":7 }
    ];

    vm.addPerson = {}; // Set an empty object

    vm.handleEvent = function (evt) {
        if (!evt)
            return;
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

        vm.people.push(vm.addPerson);
        vm.addPerson = {};

    };
}]);
