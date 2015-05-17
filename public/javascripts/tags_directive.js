blogModule.directive('tags', function () {
  return {
    priority: 1,
    restrict: 'EA',
    replace: true,
    scope: {
      initTags: '@',
      selectedTags: '='
    },
    templateUrl: '/templates/tags.html',
    link: function ($scope) {
      $scope.tags = [];
      $scope.selectedTags = [];

      $scope.$watch('initTags', function (value) {
        $scope.tags = eval(value);
      });

      $scope.selectOrCancel = function (tag) {
        if ($scope.selectedTags.indexOf(tag) === -1) {
          $scope.selectedTags.push(tag);
        } else {
          $scope.selectedTags.splice($scope.selectedTags.indexOf(tag), 1);
        }
      };
    }
  };
})