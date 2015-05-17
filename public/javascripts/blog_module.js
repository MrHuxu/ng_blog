var blogModule = angular.module('blog', ['ui.router', 'hc.marked']);

blogModule.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }
  ]
);

blogModule.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  var $appName = 'Life of xhu - '
  $stateProvider
  .state('index', {
    url: '/',
    templateUrl: '/templates/index.html',
    data: { pageTitle: $appName + 'Home' }
  })
  .state('archives', {
    url: '/archives',
    controller: 'archivesCtrl',
    templateUrl: '/templates/archives.html',
    data: { pageTitle: $appName + 'Archives' }
  })
  .state('projects', {
    url: '/projects',
    templateUrl: '/templates/projects.html',
    data: { pageTitle: $appName + 'Projects' }
  })
  .state('aboutme', {
    url: '/aboutme',
    templateUrl: 'templates/aboutme.html',
    data: { pageTitle: $appName + 'Aboutme' }
  })
  .state('article', {
    url: '/article/:name',
    controller: 'articleCtrl',
    templateUrl: '/templates/article.html'
  });
});