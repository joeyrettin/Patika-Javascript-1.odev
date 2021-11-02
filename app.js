
var userName = prompt("İsminizi girin: ")
document.getElementById("userNameID").innerText = userName;


function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
      
    if(hh > 12){
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
    document.getElementById("clock").innerText = time; 
    var t = setTimeout(function(){ currentTime() }, 1000); 
  
  }
  
  currentTime();



/**
 function askName() {
    var name = prompt("Adınız nedir?");
    document.getElementById("myName").innerText = name;
}
function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = date.getDay();

    if (session == 1) {
        session = "Pazartesi";
    } else if (session == 2) {
        session = "Salı";
    } else if (session == 3) {
        session = "Çarşamba";
    } else if (session == 4) {
        session = "Perşembe";
    } else if (session == 5) {
        session = "Cuma";
    } else if (session == 6) {
        session = "Cumartesi";
    } else if (session == 7) {
        session = "Pazar";
    }

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("myClock").innerText = time;
    document.getElementById("myClock").textContent = time;

    setTimeout(showTime, 1000);
}
askName();
showTime();

 */