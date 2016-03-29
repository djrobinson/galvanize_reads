'use strict';

/* The main app with route configurations */

angular.module('readerApp', ['ngRoute', 'ngStorage', 'angular-loading-bar'])
.config(function($routeProvider, $httpProvider){
    console.log('config running');
    $routeProvider

    /* LANDING PAGE */
    .when('/', {
        templateUrl: '/app/views/partials/home.html',
    })
    .when('/books', {
      templateUrl: '/app/views/partials/books.html',
    })
    .when('/authors', {
      templateUrl: '/app/views/partials/authors.html',
    })
    .when('/authors/new', {
      templateUrl: '/app/views/partials/createAuthor.html'
    })
    .when('/books/new', {
      templateUrl: '/app/views/partials/createBook.html'
    })
    .when('/books/:book_id', {
      templateUrl: '/app/views/partials/editBook.html'
    })
    .when('/authors/:author_id', {
      templateUrl: '/app/views/partials/editAuthor.html'
    })
    .when('/login', {
      templateUrl: '/app/views/partials/login.html'
    })
    .when('/register', {
      templateUrl: '/app/views/partials/register.html'
    })
    .otherwise('/');

    $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {
   return {
       'request': function (config) {
            console.log($localStorage.token);

           config.headers = config.headers || {};
           if ($localStorage.token) {
               config.headers['x-access-token'] = $localStorage.token;
           }
           return config;
       },
       'responseError': function (response) {
           if (response.status === 401 || response.status === 403) {
               $location.path('/signin');
           }
           return $q.reject(response);
       }
   };
}]);
});