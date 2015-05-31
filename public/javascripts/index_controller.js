blogModule.controller('indexCtrl', function ($scope, $http) {
  $http.post('/all_articles/page_articles', {}).success(function (data, status, headers, config) {
    // body...
  })
})