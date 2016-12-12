(function() {
  'use strict';

  angular.module('LunchCheck', [])

   .controller('LunchCheckController', LunchCheckController);

   LunchCheckController.$inject = ['$scope'];

   function LunchCheckController($scope) {
     $scope.dish = "";
     $scope.message = "";

     $scope.checkLunch = function() {
       $scope.message = checkLunch($scope.dish);
     };

     function checkLunch(dish) {
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
