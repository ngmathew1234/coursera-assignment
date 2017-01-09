(function (){
"use strict"

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['UserService'];
function SignUpController(UserService){
  var signupCtrl = this;
  signupCtrl.user = {};
  signupCtrl.submitted = false;

  signupCtrl.submit = function(){
    UserService.setUser(signupCtrl.user);
    signupCtrl.submitted = true;
  }
}

})();