(function () {
  'use strict';
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'src/menuapp/templates/home.template.html'
    })

    .state('categories', {
              url: '/categories',
              templateUrl: 'src/menuapp/templates/categories.template.html',
              controller: 'CategoriesController as categoriesCtrl',
                  resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                      return  MenuDataService.getAllCategories();
                    }]
              }
    })

    .state('categories.items', {
      url: '/{short_name}/items',
      templateUrl: 'src/menuapp/templates/items.template.html',
      controller: 'ItemsController as itemsCtrl',
      params: {
        short_name: null
      },
      resolve: {
        items: ['$stateParams', 'categories', 'MenuDataService', function ($stateParams, categories, MenuDataService) {
          return MenuDataService.getItemsForCategory($stateParams.short_name);
        }]
      }
    });
    ;
  }
 }
)();
