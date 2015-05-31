blogModule.controller('indexCtrl', function ($scope, $http, $sce) {
  $scope.$watch('page', function (page) {
    $scope.articles = [];
    if (page !== undefined) {
      $http.post('/all_articles/page_articles', {page: $scope.page}).success(function (data, status, headers, config) {
        $scope.article_count = data.article_count - 5;
        angular.forEach(data.articles, function (article) {
          $scope.articles.push({
            title: article.title,
            content: $sce.trustAsHtml(article.content)
          })
        })
      });
    }
    NProgress.done();
  });
})