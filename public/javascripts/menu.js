document.getElementById("drop").onclick = function() {
  if (this.className.indexOf('active') === -1) {
    this.className = 'btn btn-success active';
    document.getElementById('test1').style.display = '';
    document.getElementById('test1').style['-webkit-animation'] = 'dropdown 0.8s';
    document.getElementById('test1').style['-moz-animation'] = 'dropdown 0.8s';
    document.getElementById('test1').style['-o-animation'] = 'dropdown 0.8s';
    document.getElementById('test1').style['animation'] = 'dropdown 0.8s';
  } else {
    this.className = 'btn btn-success';
    document.getElementById('test1').style['-webkit-animation'] = 'dropup 0.8s';
    document.getElementById('test1').style['-moz-animation'] = 'dropup 0.8s';
    document.getElementById('test1').style['-o-animation'] = 'dropup 0.8s';
    document.getElementById('test1').style['animation'] = 'dropup 0.8s';
  }
};