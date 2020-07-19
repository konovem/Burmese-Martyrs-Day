var countDownDate = new Date("Jul 19, 2020, 10:37:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var remain = countDownDate - now;

  var days = Math.floor(remain / (1000 * 60 * 60 * 24));
  var hours = Math.floor((remain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remain % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML =
    days + " ရက် " +
    hours + " နာရီ " +
    minutes + " မိနစ် " +
    seconds + " စက္ကန့် အလို" + "";

    if (remain <= 0) {
        clearInterval(x);
        document.getElementById("nth-message").style.display = "none";
        document.getElementById("countdown").style.display = "none";
        document.getElementById("song").style.display = "block";
        document.getElementById("message").innerHTML = "ဗိုလ်ချုပ်အောင်ဆန်းနှင့်တကွ<br> ကျဆုံးလေပြီးသော အာဇာနည်ခေါင်းဆောင်ကြီးများအား<br>အလေးပြုအပ်ပါသည်။";
        document.getElementById("song").src = "song.mp3";
      }


}, 1000);
