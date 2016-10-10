(function () {
  'use strict';
  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);
  ItemsController.$inject = ['$stateParams',  'categories', 'items'];
  function ItemsController($stateParams, categories, items) {
   var itemsCtrl = this;
   itemsCtrl.items = items;

  }
 }
)();
