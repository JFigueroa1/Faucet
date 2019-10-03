function loadDoc() {
    
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.status == 200) {
            
          }
      };
    xhttp.open("GET", "http://localhost:3000/api", true);
    xhttp.send();
  }