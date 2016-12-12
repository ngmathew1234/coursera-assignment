(function() {
  'use strict';

  angular.module('LunchCheck', [])

   .controller('LunchCheckController', LunchCheckController);

   LunchCheckController.$inject = ['$scope'];

   function LunchCheckController($scope) {
     $scope.dish = "";
     $scope.message = "";

     $scope.checkDish = function() {
       $scope.message = checkDish($scope.dish);
     };

     function checkDish(dish) {
       if (dish === "") {
         return "Please enter data first";
       }
       var items  = dish.split(",");
       if (items.length > 0 && items.length <= 3) {
         return "Enjoy!";
       }
       if (items.length > 3) {
         return "Too Much!";
       }
     };
   }
})();
