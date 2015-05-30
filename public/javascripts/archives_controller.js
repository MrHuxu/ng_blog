blogModule.controller('archivesCtrl', function ($scope, $http, $rootScope, $state) {
  $scope.articles_2014 = [];
  $scope.articles_2013 = [];
  $scope.tags = [];

  $http.get('/all_articles').success(function (data, status, headers, config) {
    angular.forEach(data.articles_2014, function (article) {
      $scope.articles_2014.push({
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

    console.log(data);
    console.log(data.articles_2014);
    console.log(data.articles_2013);
    angular.forEach(data.articles_2013, function (article) {
      $scope.articles_2013.push({
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

    angular.forEach($scope.articles_2014.concat($scope.articles_2013), function (article) {
      angular.forEach(article.tags, function (tag) {
        if ($scope.tags.indexOf(tag) === -1){
          $scope.tags.push(tag);
        }
      });
    });
    NProgress.done();
  });
});