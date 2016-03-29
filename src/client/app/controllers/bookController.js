angular.module('readerApp')
.controller('BookCtrl', ['$scope', '$http', '$routeParams', 'bookFactory', function($scope, $http, $routeParams, bookFactory){

    function getBooks(){

      bookFactory.getBooks()
        .success(function(data) {
          console.log(data);
          $scope.books = data;
        }).error(function(error) {
          $scope.status = 'Unable to load book data: ' + error.message;
        });
      }
    getBooks();

    $scope.addBook = function(){
        console.log($scope.bookData);
        bookFactory.insertBook($scope.bookData)
        .success(function(data){
            console.log({"Success": data});
        });
    };


}])
.controller('oneBookCtrl', ['$scope', '$http', '$routeParams', 'bookFactory', function($scope, $http, $routeParams, bookFactory){
  $scope.editBook = function(){
      $scope.bookData.id = $routeParams.book_id;
      console.log($scope.bookData);
      bookFactory.updateBook($scope.bookData)
        .success(function(data){
            console.log({"Success": data});
        }).error(function(error) {
          $scope.status = 'Unable to load book data: ' + error.message;
        });
      };

    function getBook(){
      bookFactory.getBook($routeParams.book_id)
      .success(function(data){
        console.log(data);
        $scope.bookData = data[0];
      });
    }
    getBook();

    $scope.deleteBook = function(){
      bookFactory.deleteBook($routeParams.book_id)
      .success(function(data){
        console.log("Deleted!!!!");
      });
    };
}]);