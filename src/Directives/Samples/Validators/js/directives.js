angular.module("statesApp.directives", ["statesApp.services"])
    .directive("positiveInteger", [function () {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelController) {
                ngModelController.$validators.number = function(modelValue, viewValue) {
                    var value = parseInt(viewValue);
                    if (!value) 
                        return false;
                        
                    return (value > 0);
                }
            }
            
        }
    }])
    .directive("checkAbbreviation", ["stateService", "$q", function (stateService, $q) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, element, attrs, ngModelController) {
                var initialValue;
                ngModelController.$asyncValidators.checkAbbreviation = function(modelValue, viewValue) {
                    var defer = $q.defer();
                    var result = stateService.getById(viewValue);
                    result.$promise.then(function(result) {
                       if (!initialValue) {
                           initialValue = viewValue;
                           defer.resolve(true);
                           return;
                       }
                       
                       if (!result.abbreviation || result.abbreviation === initialValue) {
                           defer.resolve();
                       }
                       else {
                           defer.reject();
                       }
                        
                    })
                    .catch(function (err) {
                       defer.reject(); 
                    });
                    return defer.promise;
                }
            }
            
        }
    }]);