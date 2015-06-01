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

var postArticleRendered = function () {
  (function highlightCode (angular) {
    angular.forEach(document.getElementsByTagName('pre'), function (pre) {
      var block = pre.children[0];
      hljs.highlightBlock(block);
    });
  }(angular));

  (function showLineNum (angular) {
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
  }(angular));

  (function showProgress () {
    NProgress.done();
  }());
};

(function detectScroll () {
  window.onscroll = function (ev) {
    console.log(window.scrollY);
    if (window.scrollY >= 222)
      document.getElementsByClassName('sidebar')[0].style.top = '20px';
    else 
      document.getElementsByClassName('sidebar')[0].style.top = 242 - window.scrollY + 'px';
  }; 
}());