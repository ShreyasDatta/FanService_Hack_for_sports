        
var x = setInterval(function () {

            
  var now = new Date();
  let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();   
            
  document.getElementById("demo").innerHTML = time;       
  if (distance < 0) {
    clearInterval(x);
    ocument.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);