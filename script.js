menuSong = document.getElementById("menu_audio");
hoverSelection = document.getElementById("hover_selection");
menuSong.play();

function playHover(){
    hoverSelection.currentTime = 0;
    hoverSelection.play();
}