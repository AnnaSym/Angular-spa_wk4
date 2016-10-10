(function () {
    'use strict';
    angular.module('MenuApp')
    .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['MenuDataService','$stateParams', 'items'];
    function ItemsController (MenuDataService, $stateParam, items) {
        var itemsCtr = this;
        //var test = $stateParams.shortName;
        itemsCtr.items = items;
    }
})();
