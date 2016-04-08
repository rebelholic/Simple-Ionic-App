// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

.state('tab.people-list', {
      url: '/dash/people',
      views: {
        'tab-dash': {
          templateUrl: 'templates/people-list.html',
          controller: 'PeopleListCtrl'
        }
      }
    })
   
.state('tab.planet-list', {
      url: '/dash/planet',
      views: {
        'tab-dash': {
          templateUrl: 'templates/planet-list.html',
          controller: 'PlanetListCtrl'
        }
      }
    })
    
.state('tab.vehicles-list', {
      url: '/dash/vehicles',
      views: {
        'tab-dash': {
          templateUrl: 'templates/vehicles-list.html',
          controller: 'VehiclesListCtrl'
        }
      }
    })
    
 .state('tab.films-list', {
      url: '/dash/films',
      views: {
        'tab-dash': {
          templateUrl: 'templates/films-list.html',
          controller: 'FilmsListCtrl'
        }
      }
    })   
  
   .state('tab.starships-list', {
      url: '/dash/starships',
      views: {
        'tab-dash': {
          templateUrl: 'templates/starships-list.html',
          controller: 'StarshipsListCtrl'
        }
      }
    }) 
  
   .state('tab.species-list', {
      url: '/dash/species',
      views: {
        'tab-dash': {
          templateUrl: 'templates/species-list.html',
          controller: 'SpeciesListCtrl'
        }
      }
    }) 
  
  
  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
