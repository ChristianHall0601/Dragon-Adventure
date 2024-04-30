//Sounds
menuSong = document.getElementById("menu_audio");
hoverSelection = document.getElementById("hover_selection");
clickSelection = document.getElementById("click_selection");
fakeMenuBtns = document.getElementsByClassName("fakeButton");

//Functions
function playHover(){
    hoverSelection.currentTime = 0;
    hoverSelection.play();
}

function playSelected(){
    clickSelection.play();
}

function playMain(){
    menuSong.volume = 0.5;
    menuSong.play();
    setTimeout(stopAnimating, 1200)
}

function stopAnimating(){
    for (let i = 0; i< fakeMenuBtns.length; i++){
        (fakeMenuBtns[i]).style.display = "block"
    }
}

window.onload = playMain();