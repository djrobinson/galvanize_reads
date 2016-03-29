'use strict';

/* The main app with route configurations */

angular.module('readerApp', ['ngRoute'])
.config(function($routeProvider){
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
    .otherwise('/');
});