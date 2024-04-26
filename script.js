menuSong = document.getElementById("menu_audio");
hoverSelection = document.getElementById("hover_selection");

function playHover(){
    hoverSelection.currentTime = 0;
    hoverSelection.play();
}

window.onload = playMain();

function playMain(){
    menuSong.play();
}