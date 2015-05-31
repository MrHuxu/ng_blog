blogModule.directive('pagination', function(){
  return {
    priority: 1,
    scope: {
      page: '='
    },
    restrict: 'AE',
    templateUrl: '/templates/pagination.html',
    replace: true,
    link: function($scope, iElm, iAttrs, controller) {
      $scope.articleCount = 62;
      $scope.pageCount = parseInt($scope.articleCount % 5 === 0 ? $scope.articleCount / 5 - 1: $scope.articleCount / 5);
      $scope.pages = [];
      $scope.currentPage = 0;

      $scope.generatePages = function (page) {
        $scope.pages = [];
        $scope.pages.push(0);
        for (var i = 1; i < $scope.pageCount; i++) {
          if (i >= page - 2 && i <= page + 2) {
            if (i !== $scope.pages[$scope.pages.length - 1] + 1)
              $scope.pages.push('...');
            $scope.pages.push(i);
          }
        }
        if ($scope.pageCount !== $scope.pages[$scope.pages.length - 1] + 1)
          $scope.pages.push('...');
        $scope.pages.push($scope.pageCount);
      }

      $scope.generatePages(0);

      $scope.changePage = function (page) {
        $scope.currentPage = page;
        $scope.generatePages(page);
      };

      $scope.prevPage = function () {
        $scope.currentPage = $scope.currentPage - 1;
        $scope.generatePages($scope.currentPage);
      };

      $scope.nextPage = function () {
        $scope.currentPage = $scope.currentPage + 1;
        $scope.generatePages($scope.currentPage);
      }
    }
  };
});