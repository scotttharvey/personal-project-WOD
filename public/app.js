angular.module('crossfit', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

$urlRouterProvider.otherwise('/');

$stateProvider

.state('home', {
  url: "/home",
  templateUrl: "views/homeTmpl.html"
  controller: "homeCtrl"

})

})
