(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['menuItem', 'UserService'];
function MyInfoController(menuItem, UserService) {
  var myinfoCtrl = this;
  myinfoCtrl.user = UserService.getUser();
  myinfoCtrl.menuItem = menuItem;
  myinfoCtrl.loggedIn = myinfoCtrl.user.short_name
}

})();