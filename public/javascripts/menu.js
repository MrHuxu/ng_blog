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