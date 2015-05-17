blogModule.filter('articleFilter', function () {
  return function (articles, selectedTags) {
    var $filteredArticles = [];

    if (selectedTags) {
      angular.forEach(articles, function (article) {
        article.filtered = true;
        for (var i = 0, len = selectedTags.length; i < len; i++) {
          if (!article.contain_tag(selectedTags[i])) {
            article.filtered = false;
            break;
          }
        }
        article.filtered ? $filteredArticles.push(article) : null;
      });
    } else {
      $filteredArticles = articles;
    }

    return $filteredArticles;
  };
});