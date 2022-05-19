        
var x = setInterval(function () {

            
<<<<<<< HEAD
  //var now = new Date();
  let time = document.getElementById("video").curretTime;
=======
  var now = new Date();
  let time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();   
>>>>>>> 2a5686ac0e61ca6ff9097a701f848fa23d8ff70f
            
  document.getElementById("demo").innerHTML = time;       
  if (distance < 0) {
    clearInterval(x);
<<<<<<< HEAD
    document.getElementById("demo").innerHTML = "EXPIRED";
=======
    ocument.getElementById("demo").innerHTML = "EXPIRED";
>>>>>>> 2a5686ac0e61ca6ff9097a701f848fa23d8ff70f
  }
}, 1000);