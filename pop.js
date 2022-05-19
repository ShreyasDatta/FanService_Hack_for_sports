        
var x = setInterval(function () {

            
  let time = document.getElementById("video").currentTime;  
            
  document.getElementById("demo").innerHTML = time;       
  if (distance < 0) {
    clearInterval(x);
    ocument.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);