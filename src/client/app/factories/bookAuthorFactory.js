'use strict';

angular.module('readerApp')
  .factory('bookAuthorFactory', ['$http', function($http) {

    var urlBase = '/public';
    var bookAuthorFactory = {};

    bookAuthorFactory.getBooksAuthors = function(){
      return $http.get(urlBase);
    };
    bookAuthorFactory.getByBook = function(book_id){
      return $http.get(urlBase + '/book/' + book_id);
    };
    bookAuthorFactory.getByAuthor = function(author_id){
      return $http.get(urlBase + '/author/' + author_id);
    };
    bookAuthorFactory.addBookAuthor = function(book_id, author_id){
      var data = {};
      data.book_id = book_id[0];
      data.author_id = author_id;
      console.log(data);
      return $http.post(urlBase, data);
    }
    return bookAuthorFactory;
}]);