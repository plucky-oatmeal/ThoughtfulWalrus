var app = angular.module('distress', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
          url: '/',
          controller: 'HomeCtrl',
          templateUrl: 'app/home/home.html',
          reload: false
      })
      .state('signup', {
          url: '/signup',
          templateUrl: 'app/signup/signup.html',
          controller: 'SignupController',
          authenticate: false,
          reload: false
      })
      .state('contacts', {
          url: '/contacts',
          templateUrl: 'app/addContacts/addContacts.html',
          controller: 'ContactController',
          authenticate: false,
          reload: false
      });
});
