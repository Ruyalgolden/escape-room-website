let redirecting = false
window.onload = function () {
    document.querySelector("#play").addEventListener("click", redirect);
    document.querySelector("#howTo").addEventListener("click", howTo);
    document.querySelector("#credits").addEventListener("click", credits);
}
function redirect() {
    if (!redirecting) {
        document.querySelector("#rightPanel").innerHTML=`
        <span style="flex:65%" class="container" id="titleSpan">
          <h1 class="nosifer-regular" id="title">Horror Escape<br>Room</h1>
        </span>
        <span style="flex:35%">
          <h1 class="indie-flower-regular" id="By">By Andrew and Ethan</h1>
        </span>"`;
        setTimeout(() => {
            document.querySelector("#play").style.transform = "translate(-1000px,-500px) rotate(90deg)";
            document.querySelector("#howTo").style.transform = "translate(-1000px, 500px) rotate(90deg)";
            document.querySelector("#credits").style.transform = "translate(400px, 500px) rotate(90deg)";
            document.querySelector("#title").style.transform = "translate(1000px, -500px) rotate(-90deg)";
            document.querySelector("#By").style.transform = "translate(1000px, 500px) rotate(-90deg)";
        }, 2000);
        document.querySelector("#play").style.transition = "2s"
        document.querySelector("#play").style.transform = "rotate(360deg)"
        setTimeout(() => {
        window.location.href="https://ruyalgolden.github.io/CSCD-Project/";
    }, 3000);
    }
}
function howTo() {
    document.querySelector("#rightPanel").innerHTML=`
    <span style="flex:100%">
      <h1 class="indie-flower-regular" id="By">
      WASD - Movement
      <br>
      G - Turn On/Off Flashlight
      <br>
      Click - Interact
      <br>
      Ctrl + R - Restart
      </h1>
    </span>"`;

}

function credits() {
    document.querySelector("#rightPanel").innerHTML=`
    <span style="flex:100%">
      <h1 class="indie-flower-regular" id="By">
      Decorator - Ethan
      <br>
Scripter - Andrew
<br>
Models :
<br> 
* title:	broken glass
<br>
* source:	https://sketchfab.com/3d-models/broken-glass-f32b81b4692e412e9f2c621f2d0597b6
<br>
* author:	mkelly2024 (https://sketchfab.com/mkelly2024)
<br>
<br>
* title:	Snowman Monster
<br>
* source:	https://sketchfab.com/3d-models/snowman-monster-e49e299a729e43928b5817b6c28158ad
<br>
* author:	Batuhan13 (https://sketchfab.com/Batuhan13)
<br>
      </h1>
    </span>"`;

}
