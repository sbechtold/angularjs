/*  
    Make sure you add a dependency to ngMessages
*/
angular.module("productApp.controllers", ["ngMessages", "productApp.services"])
   .controller("AppController", ["$scope", "$location", "productService", function ($scope, $location, productService) {
       $scope.go = function (path) {
           $location.path(path);
       };
   }])
   .controller("ListController", ["$scope", "productService", function($scope, productService) {
       var vm = this;
       vm.products = productService.all();
       vm.products.$promise.catch(function (params) {
          console.error("An error occurred querying server"); 
       });
       
       vm.selectProduct = function (product) {
           $scope.go("/details/" + product.productID);
       };
   }])
   .controller("DetailController", ["$scope", "$routeParams", "productService", function($scope, $routeParams, productService) {
       var vm = this;
       vm.isUpdating = false;
       if ($routeParams.id) {
            vm.product = productService.getById($routeParams.id);
            vm.product.$promise.then(function (res) {
                vm.isUpdating = true;
            }).catch(function (params) {
                console.error("An error occurred fetching product"); 
            });
       }
       else {
           vm.product = productService.build();
       }
       
       vm.delete = function () {
           productService.delete(vm.product).then(function (res) {
               $scope.go("/");
           }).catch(function (params) {
                console.error("An error occurred deleting a product"); 
            });
       };
      
       vm.save = function () {
           vm.product = productService.save(vm.product);
           vm.product.$promise.then(function (result) {
                $scope.go("/");
            }).catch(function (params) {
                console.error("An error occurred saving product"); 
            });
       };
   }]);