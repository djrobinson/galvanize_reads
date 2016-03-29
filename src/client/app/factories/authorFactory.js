'use strict';

angular.module('readerApp')
  .factory('authorFactory', ['$http', function($http) {

    var urlBase = '/api/authors';
    var authorFactory = {};

    authorFactory.getAuthors = function() {
      return $http.get(urlBase);
    };

    authorFactory.getAuthor = function(id) {
      return $http.get(urlBase + '/' + id);
    };

    authorFactory.insertAuthor = function (author) {
      return $http.post(urlBase + '/new', author);
    };

    authorFactory.updateAuthor = function(author) {
      return $http.put(urlBase + '/' + author.id, author);
    };

    authorFactory.deleteAuthor = function(id) {
      return $http.delete(urlBase + '/' + id);
    };

    return authorFactory;

}]);