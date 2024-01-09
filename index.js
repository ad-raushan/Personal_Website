function dark() {
  var bodyStyle = getComputedStyle(document.body);

  if (bodyStyle.backgroundColor == "rgb(0, 0, 0)" || bodyStyle.backgroundColor == "black") {
      // Changed the condition to check for both 'rgb(0, 0, 0)' and 'black'
      document.body.style.background = "white";
      document.body.style.color = "black";
      document.getElementById("mode").src = "./pics/night.png";
      var x = document.querySelectorAll("a");
      var y = document.querySelector("p");
      y.style.color = "black";
      var i;
      for (i = 0; i < x.length; i++) {
          x[i].style.color = "black";
      }
  } else {
      document.body.style.background = "black";
      document.body.style.color = "white";
      document.getElementById("mode").src = "./pics/day.png";

      var x = document.querySelectorAll("a");
      var y = document.querySelector("p");
      y.style.color = "white";
      var i;
      for (i = 0; i < x.length; i++) {
          x[i].style.color = "white";
      }
  }
}


function darka() {
  if (document.body.style.background == "black") {
      document.body.style.background = "white";
      document.body.style.color = "black";
      document.getElementById("mode").src = "./pics/night1.png";
      var x = document.querySelectorAll("a");
      var y = document.querySelector("p");
      y.style.color = "black";
      var i;
      for (i = 0; i < 10; i++) {
          x[i].style.color = "black";
        };

    }
    
    else {
      document.body.style.background = "black";
      document.body.style.color = "white";
      document.getElementById("mode").src = "./pics/day.png";

      var x = document.querySelectorAll("li");
      var y = document.querySelector("p");
      y.style.color = "white";
      var i;
      for (i = 0; i < 10; i++) {
          x[i].style.color = "white";
      };

    }
}

function darkb() {
  if (document.body.style.background == "black") {
      document.body.style.background = "white";
      document.getElementById("mode").src = "./pics/night1.png";


    }
    
    else {
      document.body.style.background = "black";
      document.getElementById("mode").src = "./pics/day.png";

    }
}