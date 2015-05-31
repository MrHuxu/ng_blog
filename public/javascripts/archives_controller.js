blogModule.controller('archivesCtrl', function ($scope, $http, $rootScope, $state) {
  $scope.articles = {};
  $scope.tags = [];

  var generate_article_obj = function (article) {
    return {
      name        : article,
      title       : article.split('*')[1],
      time        : article.split('*')[2],
      tags        : article.split('*')[3].split('.')[0].split('-'),
      filtered    : true,
      contain_tag : function (tag) {
        return this.name.indexOf(tag) !== -1;
      }
    };
  };

  var save_tag = function (article) {
    angular.forEach(article.tags, function (tag) {
      if ($scope.tags.indexOf(tag) === -1){
        $scope.tags.push(tag);
      }
    });
  }

  $http.get('/all_articles').success(function (data, status, headers, config) {
    angular.forEach(data.articles, function (article) {
      if (article[0] !== '.') {
        var $article_obj = generate_article_obj(article);
        var $key = 'articles_' + $article_obj.time.slice(0, 4);
        if ($scope.articles[$key] === undefined)
          $scope.articles[$key] = [];
        $scope.articles[$key].push($article_obj);
        save_tag($article_obj);
      }
    });
    NProgress.done();
  });
});