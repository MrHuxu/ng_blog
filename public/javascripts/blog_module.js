var blogModule = angular.module('blog', ['ui.router', 'hc.marked']);

blogModule.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]
);

blogModule.config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');   // This can just work on hashbang mode
  var $appName = 'Life of xhu - '
  var startProgress = function () {
    NProgress.start();
  };
  $stateProvider
  .state('index', {
    url: '/',
    controller: 'indexCtrl',
    templateUrl: '/templates/index.html',
    data: { pageTitle: $appName + 'Home' },
    onEnter: startProgress
  })
  .state('archives', {
    url: '/archives',
    controller: 'archivesCtrl',
    templateUrl: '/templates/archives.html',
    data: { pageTitle: $appName + 'Archives' },
    onEnter: startProgress
  })
  .state('projects', {
    url: '/projects',
    controller: 'commonCtrl',
    templateUrl: '/templates/projects.html',
    data: { pageTitle: $appName + 'Projects' },
    onEnter: startProgress
  })
  .state('aboutme', {
    url: '/aboutme',
    controller: 'commonCtrl',
    templateUrl: 'templates/aboutme.html',
    data: { pageTitle: $appName + 'Aboutme' },
    onEnter: startProgress
  })
  .state('article', {
    url: '/article/:name',
    controller: 'articleCtrl',
    templateUrl: '/templates/article.html',
    onEnter: startProgress
  });
});