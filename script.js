//Sounds
menuSong = document.getElementById("menu_audio");
hoverSelection = document.getElementById("hover_selection");
clickSelection = document.getElementById("click_selection")

//Functions
function playHover(){
    hoverSelection.currentTime = 0;
    hoverSelection.play();
}

function playSelected(){
    clickSelection.play();
}

function playMain(){
    menuSong.volume = 0.5
    menuSong.play();
}


window.onload = playMain();

