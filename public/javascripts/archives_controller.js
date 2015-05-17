blogModule.controller('archivesCtrl', function ($scope, $http, $rootScope, $state) {
  $scope.articles = [];
  $scope.tags = [];

  $http.get('/all_articles').success(function (data, status, headers, config) {
    angular.forEach(data.articles_2014.concat(data.articles_2013), function (article) {
      $scope.articles.push({
        name        : article,
        title       : article.split('*')[1],
        time        : article.split('*')[2],
        tags        : article.split('*')[3].split('.')[0].split('-'),
        filtered    : true,
        contain_tag : function (tag) {
          return this.name.indexOf(tag) !== -1;
        }
      });
    });

    angular.forEach($scope.articles, function (article) {
      angular.forEach(article.tags, function (tag) {
        if ($scope.tags.indexOf(tag) === -1){
          $scope.tags.push(tag);
        }
      });
    });
  });
});