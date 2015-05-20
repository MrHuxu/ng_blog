blogModule.config(['markedProvider', function(markedProvider) {
  markedProvider.setOptions({
    gfm: true,
    tables: true,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });
}]);

blogModule.controller('articleCtrl', function ($scope, $stateParams, $http, $sce, $state) {
  var file_name = $stateParams.name;
  var file_name_arr = file_name.split('*');
  var file_year = file_name_arr[2].substring(0, 4);
  $state.current.data = { pageTitle: 'Life of xhu - ' + file_name_arr[1] };

  $http.post('/all_articles', {year: file_year, name: file_name}).success(function (data, status, headers, config) {
    $scope.content = data;
    NProgress.set(0.4);
  });

  $scope.showProgress = function () {
    NProgress.done();
  };
});