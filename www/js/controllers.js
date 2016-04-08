angular.module('starter.controllers', [])

.controller('DashCtrl', ['$scope','SWServices', function($scope,SWServices) {
    
 
    
}])

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('PeopleListCtrl', ['$scope','SWServices', function($scope,SWServices) {
     $scope.currentPage = 1;
     $scope.totalRecord = 9;
     $scope.noMoreItemsAvailable = false;
     
     
      $scope.loadMore = function (){ 
           SWServices.getloadpage($scope.currentPage).then(function (swvar){  
                $scope.swvar = swvar.data.results;
                 if ($scope.swvar.length == $scope.totalRecord) { 
	            $scope.noMoreItemsAvailable = true;}
               else {
		        $scope.currentPage += 1;

         }

               $scope.$broadcast('scroll.infiniteScrollComplete');
          });
      }
       
}])



.controller('PlanetListCtrl', ['$scope','SWServices', function($scope,SWServices) {
     $scope.currentPage = 1;
     $scope.totalRecord = 9;
     $scope.noMoreItemsAvailable = false;
     
      $scope.loadMore = function (){ 
           SWServices.getloadpage2($scope.currentPage).then(function (swvar){  
                $scope.swvar = swvar.data.results;
                 if ($scope.swvar.length == $scope.totalRecord) { 
	            $scope.noMoreItemsAvailable = true;}
               else {
		        $scope.currentPage += 1; }

               $scope.$broadcast('scroll.infiniteScrollComplete');
          });
      }
       
}])

.controller('VehiclesListCtrl', ['$scope','SWServices', function($scope,SWServices) {
     $scope.currentPage = 1;
     $scope.totalRecord = 9;
     $scope.noMoreItemsAvailable = false;
     
      $scope.loadMore = function (){ 
           SWServices.getloadpage6($scope.currentPage).then(function (swvar){  
                $scope.swvar = swvar.data.results;
                 if ($scope.swvar.length == $scope.totalRecord) { 
	            $scope.noMoreItemsAvailable = true;}
               else {
		        $scope.currentPage += 1; }

               $scope.$broadcast('scroll.infiniteScrollComplete');
          });
      }     
}])

.controller('FilmsListCtrl', ['$scope','SWServices', function($scope,SWServices) {
     $scope.currentPage = 1;
     $scope.totalRecord = 9;
     $scope.noMoreItemsAvailable = false;
     
      $scope.loadMore = function (){ 
           SWServices.getloadpage3($scope.currentPage).then(function (swvar){  
                $scope.swvar = swvar.data.results;
                 if ($scope.swvar.length == $scope.totalRecord) { 
	            $scope.noMoreItemsAvailable = true;}
               else {
		        $scope.currentPage += 1; }

               $scope.$broadcast('scroll.infiniteScrollComplete');
          });
      }     
}])


.controller('StarshipsListCtrl', ['$scope','SWServices', function($scope,SWServices) {
     $scope.currentPage = 1;
     $scope.totalRecord = 9;
     $scope.noMoreItemsAvailable = false;
     
      $scope.loadMore = function (){ 
           SWServices.getloadpage5($scope.currentPage).then(function (swvar){  
                $scope.swvar = swvar.data.results;
                 if ($scope.swvar.length == $scope.totalRecord) { 
	            $scope.noMoreItemsAvailable = true;}
               else {
		        $scope.currentPage += 1; }

               $scope.$broadcast('scroll.infiniteScrollComplete');
          });
      }     
}])

.controller('SpeciesListCtrl', ['$scope','SWServices', function($scope,SWServices) {
     $scope.currentPage = 1;
     $scope.totalRecord = 9;
     $scope.noMoreItemsAvailable = false;
     
      $scope.loadMore = function (){ 
           SWServices.getloadpage4($scope.currentPage).then(function (swvar){  
                $scope.swvar = swvar.data.results;
                 if ($scope.swvar.length == $scope.totalRecord) { 
	            $scope.noMoreItemsAvailable = true;}
               else {
		        $scope.currentPage += 1; }

               $scope.$broadcast('scroll.infiniteScrollComplete');
          });
      }     
}])
    

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
