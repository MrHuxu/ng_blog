blogModule.controller('indexCtrl', function ($scope, $http) {
  $scope.$watch('page', function (page) {
    if (page !== undefined) {
      $http.post('/all_articles/page_articles', {page: $scope.page}).success(function (data, status, headers, config) {
        $scope.article_count = data.article_count - 5;
        $scope.articles = data.articles;
      });
    }
    NProgress.done();
  });
})