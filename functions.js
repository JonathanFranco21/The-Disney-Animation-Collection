var countDownDate1 = new Date("Feb 14, 2024 00:00:00").getTime();
var countDownDate2 = new Date("May 26, 2023 00:00:00").getTime();

var timer1= document.getElementById("timer1")
var timer2= document.getElementById("timer2")

function countdown(finish_date, timer){
  var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = finish_date - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer.innerHTML = days + " day(s), " + hours + " hour(s), " + minutes + " minute(s), " + seconds + " second(s)";


    if (distance < 0) {
      clearInterval(x);
      timer.innerHTML = "NOW AVAILABLE";
      }
    }, 1000);
  }

  countdown(countDownDate1, timer1)
  countdown(countDownDate2, timer2)