(function menu () {
  document.getElementById("dropdown-btn").onclick = function() {
    if (this.className.indexOf('active') === -1) {
      this.className = 'btn btn-success active';
      document.getElementById('dropdown-list').style.display = '';
      document.getElementById('dropdown-list').className = 'dropin';
    } else {
      this.className = 'btn btn-success';
      document.getElementById('dropdown-list').className = 'dropout';
    }
  };
}());

var showLineNumAndProgress = function () {
  angular.forEach(document.getElementsByTagName('pre'), function (pre) {
    var code = pre.children[0];
    var line_num = code.innerHTML.split('\n').length;
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