(function() {
  'use strict';
  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyListController', ToBuyListController)
    .controller('AlreadyBoughtListController', AlreadyBoughtListController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyListController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyListController(ShoppingListCheckOffService) {
    var controller = this;

    controller.buyItems = ShoppingListCheckOffService.getBuyItems();

    controller.wantToBuy = function(index) {
      ShoppingListCheckOffService.wantToBuy(index);
    }
  }

  AlreadyBoughtListController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtListController(ShoppingListCheckOffService) {
    var controller = this;

    controller.boughtItems = ShoppingListCheckOffService.getBoughtItems();

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var buyItems = [{ name: "cookies", quantity: 10 },
      { name: "fish", quantity: 1 },
      { name: "chicken", quantity: 6 },
      { name: "beef", quantity: 14 },
      { name: "pork", quantity: 8 }]
    var boughtItems = [];

    this.wantToBuy = function (index) {
      boughtItems.push(buyItems[index]);
      buyItems.splice(index, 1);
    }

    this.getBuyItems = function() {
      return buyItems;
    }

    this.getBoughtItems = function() {
      return boughtItems;
    }
  }

}
)();
