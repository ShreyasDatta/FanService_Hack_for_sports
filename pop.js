        
var x = setInterval(function () {

            
  //var now = new Date();
  let time = document.getElementById("video").curretTime;
            
  document.getElementById("demo").innerHTML = time;       
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);