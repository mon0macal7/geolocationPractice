alert("estoy conectada");

//Languaje of browser
const lang =navigator.languaje
console.log(lang)

//user of the web
var user = navigator.userAgent
console.log(user)
//
var myCacheStorage = self.caches;
console.log(myCacheStorage)

//pixel bit depth of the screen
let depth = window.screen.pixelDepth
console.log(depth)

let screenW = window.screen.width
var screenH = window.screen.height
console.log(screenW, screenH)
//geolocation

 var x = document.getElementById("demo");

 function getlocation(){
     if (navigator.geolocation){
         navigator.geolocation.getCurrentPosition(showPosition);
     } else{
         x.innerHTML ="Geolocation is not supported by this browser.";
     }
 }

 function showPosition (position){
     x.innerHTML = "Latitude:" + position.coords.latitude +
     "<br>Longitude: " + position.coords.longitude;
 }
 getlocation()