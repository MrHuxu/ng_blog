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
      var $code = pre.children[0];
      var $lineNum = $code.innerHTML.split('\n').length - 1;
      var $lineNumUl = document.createElement('ul');
      $lineNumUl.className = 'numbering';
      for (var i = 1; i <= $lineNum; i++) {
        var $lineNumLi = document.createElement('li');
        $lineNumLi.innerText = i;
        $lineNumUl.appendChild($lineNumLi);
      }
      pre.appendChild($lineNumUl);
    })
  }(angular));

  (function showProgress () {
    NProgress.done();
  }());
};

(function detectScroll () {
  window.onscroll = function (ev) {
    if (document.getElementsByClassName('sidebar').length > 0) {
      if (window.scrollY >= 222)
        document.getElementsByClassName('sidebar')[0].style.top = '20px';
      else
        document.getElementsByClassName('sidebar')[0].style.top = 242 - window.scrollY + 'px';
    }
  }; 
}());
