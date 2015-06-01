blogModule.directive('postRender', function(){
  return {
    restrict: 'EA',
    scope: {
      content: '=',
      callback: '&'
    },
    template: '<p ng-bind-html="content"></p>',
    replace: true,
    link: function($scope, iElm, iAttrs, controller) {
      $scope.$watch('content', function (value) {
        if (value)
          postArticleRendered();
      });
    }
  };
});

blogModule.controller('articleCtrl', function ($scope, $stateParams, $http, $sce, $state) {
  var file_name = $stateParams.name;
  var file_name_arr = file_name.split('*');
  var file_year = file_name_arr[2].substring(0, 4);
  $state.current.data = { pageTitle: 'Life of xhu - ' + file_name_arr[1] };

  $http.post('/all_articles/single_article', {year: file_year, name: file_name}).success(function (data, status, headers, config) {
    $scope.content = $sce.trustAsHtml(data);
  });
});