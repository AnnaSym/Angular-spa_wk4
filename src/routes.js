(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
	 component: 'categories',
    templateUrl: 'src/menuapp/templates/categories.template.html',
    controller: 'CategoriesController as categoryList',
    resolve: {
   categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  // Item detail
  .state('items', {
    url: '/items/{shortName}',
    templateUrl: 'src/menuapp/templates/items.template.html',
		 component: 'items',
       controller: 'ItemsController as itemsCtr',
  	resolve: {
     items: ['MenuDataService', function (MenuDataService) {
	return MenuDataService.getMenuForCategory('L')  }] },
 
  });
  
      $urlRouterProvider
     .otherwise('/');
}

})();
