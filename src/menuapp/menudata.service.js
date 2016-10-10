(function () {
  'use strict';
  angular.module('data')
  .service('MenuDataService', MenuDataService)
  .constant('MenuBasePath', 'https://davids-restaurant.herokuapp.com');

  MenuDataService.$inject = ['$http', 'MenuBasePath'];
  function MenuDataService($http, MenuBasePath) {
    var service = this;

    service.getAllCategories = function() {
      return $http({
                    method: 'GET',
                    url: MenuBasePath + '/categories.json'
      })
      .then(function (response) {
        return response.data;
      })
      .catch(function (response) {
        return [];
      });
    }
    service.getItemsForCategory = function(categoryShortName) {
      return $http({
                    method: 'GET',
                    url: MenuBasePath + '/menu_items.json',
                    params: {
                      category: categoryShortName
                    }
      }).then(function (response) {
        return response.data.menu_items;
      }, function (response) {
        return [];
      });
    }
  }
 }
)();
