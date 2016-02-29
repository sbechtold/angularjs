angular.module("filterApp.filters", [])
    .filter("overTheHill", [function() {
        return function(data) {
            var result = [];
            
            data.forEach(function(one) {
                if (one.Age >= 40) {
                    result.push(one);
                } 
            });
            return result;  
        }
    }]);