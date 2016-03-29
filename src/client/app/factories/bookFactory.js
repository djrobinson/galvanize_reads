'use strict';

angular.module('readerApp')
  .factory('bookFactory', ['$http', function($http) {

    var urlBase = '/api/books';
    var bookFactory = {};

    bookFactory.getBooks = function() {
      return $http.get(urlBase);
    };

    bookFactory.getBook = function(id) {
      return $http.get(urlBase + '/' + id);
    };

    bookFactory.insertBook = function (book) {
      return $http.post(urlBase + '/new', book);
    };

    bookFactory.updateBook = function(book) {
      return $http.put(urlBase + '/' + book.id, book);
    };

    bookFactory.deleteBook = function(id) {
      return $http.delete(urlBase + '/' + id);
    };

    return bookFactory;

}]);