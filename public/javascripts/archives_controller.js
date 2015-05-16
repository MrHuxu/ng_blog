blogModule.controller('archivesCtrl', function ($scope, $http) {
  $scope.article_arr = [];

  $http.get('/all_articles').success(function (data, status, headers, config) {
    for (var i = 0, str = data.articles_2014.concat(data.articles_2013), len = str.length; i < len; i++) {
      $scope.article_arr.push({
        name        : str[i],
        title       : str[i].split('*')[1],
        time        : str[i].split('*')[2],
        tags        : str[i].split('*')[3].split('.')[0].split('-'),
        filtered    : true,
        contain_tag : function (tag_obj) {
          return this.name.indexOf(tag_obj.name) != -1;
        }
      });
    }
  });
});