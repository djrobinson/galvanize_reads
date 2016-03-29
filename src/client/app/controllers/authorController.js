angular.module('readerApp')
.controller('AuthorCtrl', ['$scope', '$http', '$routeParams', 'authorFactory', function($scope, $http, $routeParams, authorFactory){

    function getAuthors(){
      authorFactory.getAuthors()
        .success(function(data) {
          console.log(data);
          $scope.authors = data;
        }).error(function(error) {
          $scope.status = 'Unable to load author data: ' + error.message;
        });
      }
    getAuthors();

    $scope.addAuthor = function(){
        console.log($scope.AuthorData);
        authorFactory.insertAuthor($scope.authorData)
        .success(function(data){
            console.log({"Success": data});
        });
    };
}])
.controller('oneAuthorCtrl', ['$scope', '$http', '$routeParams', 'authorFactory', function($scope, $http, $routeParams, authorFactory){

    $scope.editAuthor = function(){
      $scope.authorData.id = $routeParams.author_id;
      console.log($scope.authorData);
      authorFactory.updateAuthor($scope.authorData)
        .success(function(data){
            console.log({"Success": data});
        });
      };

    function getAuthor(){
      authorFactory.getAuthor($routeParams.author_id)
      .success(function(data){
        console.log(data);
        $scope.authorData = data[0];
      });
    }
    getAuthor();

    $scope.deleteAuthor = function(){
      authorFactory.deleteAuthor($routeParams.author_id)
      .success(function(data){
        console.log("Bahdeleted!!!!");
      });
    };
}]);