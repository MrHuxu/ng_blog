blogModule.directive('onFinishRender', function ($timeout) {
  return {
    restrict: 'A',
    link: function (scope, element, attr) {
      if (scope.$last === true) {
        $timeout(function () {
          scope.$emit('ngRepeatFinished');
        });
      }
    }
  }
});

blogModule.controller('indexCtrl', function ($scope, $http, $sce) {
  $scope.$watch('page', function (page) {
    $scope.articles = [];
    if (page !== undefined) {
      $http.post('/all_articles/page_articles', {page: $scope.page}).success(function (data, status, headers, config) {
        $scope.article_count = data.article_count - 5;
        angular.forEach(data.articles, function (article) {
          var time = article.filename.split('*')[2];
          var index_title = time.slice(4, 6) + '月' + time.slice(6, 8) + '日 ' + time.slice(0, 4);
          angular.forEach(article.filename.split('*')[3].split('.')[0].split('-'), function (tag) {
            index_title = index_title + ' · ' + tag;
          });
          $scope.articles.push({
            title: index_title,
            filename: article.filename,
            content: $sce.trustAsHtml(article.content)
          })
        })
      });
    }
  });

  $scope.$on('ngRepeatFinished', function() {
    postArticleRendered();
  });
})