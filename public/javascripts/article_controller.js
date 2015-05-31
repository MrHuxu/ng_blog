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

  $http.post('/all_articles/single_article', {year: file_year, name: file_name}).success(function (data, status, headers, config) {
    $scope.content = data;
  });

  $scope.showProgress = function () {
    angular.forEach(document.getElementsByTagName('pre'), function (pre) {
      var code = pre.children[0];
      var line_num = code.innerHTML.split('\n').length - 1;
      var line_num_ul = document.createElement('ul');
      line_num_ul.className = 'numbering';
      for (var i = 1; i <= line_num; i++) {
        var line_num_li = document.createElement('li');
        line_num_li.innerText = i;
        line_num_ul.appendChild(line_num_li);
      }
      pre.appendChild(line_num_ul);
    })
    NProgress.done();
  };
});