(function(){
'use strict'

angular.module('public')
.directive('dishAvailable', ['MenuService', DishAvailable]);

function DishAvailable(MenuService) {
  return {
    require : 'ngModel',
    link : function($scope, element, attrs, ctrl) {
      element.on('blur', function (evt) {
        $scope.$apply(function() {
          MenuService.getMenuItem(element.val()).then(function(response){
            ctrl.$setValidity('short_name', response.short_name == element.val());
          })
          .catch(function(response){
            // Restaurant server produces error 500 instead of 404.
            ctrl.$setValidity('short_name', false);
          });
        });
      }); 
    }
  }
}
})();