angular.module('starter.services', [])

.factory('SWServices', function($http, $q, $timeout) {
  
  var swvar = [];
  // Might use a resource here that returns a JSON array

       return {
              getloadpage: function(id) {
                var deferred = $q.defer();
                $http.get('http://swapi.co/api/people/?page='+id)
                .then(function(response) {
                    swvar = response;
                    console.log(swvar);
                    deferred.resolve(swvar);
                });
                return deferred.promise;
            },
       
            
               getloadpage2: function(id) {
                var deferred = $q.defer();
                $http.get('http://swapi.co/api/planets/?page='+id)
                .then(function(response) {
                    swvar = response;
                    console.log(swvar);
                    deferred.resolve(swvar);
                });
                return deferred.promise;
            },
            
             getloadpage3: function(id) {
                var deferred = $q.defer();
                $http.get('http://swapi.co/api/films/?page='+id)
                .then(function(response) {
                    swvar = response;
                    console.log(swvar);
                    deferred.resolve(swvar);
                });
                return deferred.promise;
            },
            
            getloadpage4: function(id) {
                var deferred = $q.defer();
                $http.get('http://swapi.co/api/species/?page='+id)
                .then(function(response) {
                    swvar = response;
                    console.log(swvar);
                    deferred.resolve(swvar);
                });
                return deferred.promise;
            },
            
              getloadpage5: function(id) {
                var deferred = $q.defer();
                $http.get('http://swapi.co/api/starships/?page='+id)
                .then(function(response) {
                    swvar = response;
                    console.log(swvar);
                    deferred.resolve(swvar);
                });
                return deferred.promise;
            },

           getloadpage6: function(id) {
                var deferred = $q.defer();
                $http.get('http://swapi.co/api/vehicles/?page='+id)
                .then(function(response) {
                    swvar = response;
                    console.log(swvar);
                    deferred.resolve(swvar);
                });
                return deferred.promise;
            },

           

        }

    });
