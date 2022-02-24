var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if(mysong.paused){
        mysong.play();
        icon.src = "img/stop.jpg";
    }
    else{
        mysong.pause();
        icon.src = "img/play.jpg";
    }
}