let redirecting = false
window.onload = function () {
    document.querySelector("#play").addEventListener("click", redirect);
}
function redirect() {
    if (!redirecting) {
        setTimeout(() => {
            document.querySelector("#play").style.transform = "translate(-1000px,-500px) rotate(90deg)";
            document.querySelector("#howTo").style.transform = "translate(-1000px, 500px) rotate(90deg)";
            document.querySelector("#credits").style.transform = "translate(400px, 500px) rotate(90deg)";
            document.querySelector("#title").style.transform = "translate(1000px, -500px) rotate(-90deg)";
            document.querySelector("#By").style.transform = "translate(1000px, 500px) rotate(-90deg)";
        }, 2000);
        document.querySelector("#play").style.transition = "2s"
        document.querySelector("#play").style.transform = "rotate(360deg)"
        redirecting = true;
    }
}
