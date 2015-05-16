var blogModule = angular.module('blog', ['ui.router', 'hc.marked']);

blogModule.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: '/templates/index.ejs'
  })
  .state('archives', {
    url: '/archives',
    controller: 'archivesCtrl',
    templateUrl: '/templates/archives.ejs'
  })
  .state('projects', {
    url: '/projects',
    templateUrl: '/templates/projects.ejs'
  })
  .state('aboutme', {
    url: '/aboutme',
    templateUrl: 'templates/aboutme.ejs'
  })
  .state('article', {
    url: '/article/:name',
    controller: 'articleCtrl',
    templateUrl: '/templates/article.ejs'
  });
});