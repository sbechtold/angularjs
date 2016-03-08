angular.module("filterApp.filters", [])
    .filter("overTheHill", [function() {
      return function(data) {
            var result = [];

            data.forEach(function(one) {
                if (one.Age >= 30) {
                    result.push(one);
                }
            });
            return result;
        }
    }])
    .filter("checkThirty", ["filterFilter", function(filterFilter) {
        return function(data) {
            var filter = {Age: 42};
            return filterFilter(data, filter);
        }
    }]);
