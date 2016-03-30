angular.module('readerApp')
.controller('publicBooksCtrl', ['$scope', '$http', '$routeParams', 'bookAuthorFactory', function($scope, $http, $routeParams, bookAuthorFactory){
    function getBookAuthors(){
      bookAuthorFactory.getBooksAuthors()
        .success(function(data) {
          console.log(data);
          $scope.books = data;
        }).error(function(error) {
          $scope.status = 'Unable to load author data: ' + error.message;
        });
      }
    getBookAuthors();
}]);