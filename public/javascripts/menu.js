document.getElementById("drop").onclick = function() {
  if (this.className.indexOf('active') === -1) {
    this.className = 'btn btn-success active';
    document.getElementById('test1').style.display = '';
    document.getElementById('test1').className = 'dropin';
  } else {
    this.className = 'btn btn-success';
    document.getElementById('test1').className = 'dropout';
  }
};