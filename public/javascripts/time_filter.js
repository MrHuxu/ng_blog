blogModule.filter('timeFilter', function () {
  return function (time) {
    var $month = parseInt(time.slice(4, 6));
    var $day = parseInt(time.slice(6, 8));
    return $month + '月' + $day + '日';
  };
});