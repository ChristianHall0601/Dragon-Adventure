//Sounds
menuSong = document.getElementById("menu_audio");
hoverSelection = document.getElementById("hover_selection");
clickSelection = document.getElementById("click_selection");
fakeBtns = document.getElementsByClassName("fakeButton");
playBtn = document.getElementById("playBtn");
helpBtn = document.getElementById("helpBtn")

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
    setTimeout(showMyStartBtns, 1000)
}

function showMyStartBtns(){
    for (let i = 0; i < fakeBtns.length; i++){
        fakeBtns[i].style.display = "block"
        fakeBtns[i].style.animation = "buttonOnOpen 0.5s"
    }
}

function highlightPlayBtn(){
    playBtn.style.animation = "coolAnimation 0.2s both"
}

function highlightHelpBtn(){
    helpBtn.style.animation = "coolAnimation 0.2s both"
}

function deactivatePlayBtn(){
    playBtn.style.animation = "coolAnimation 0.2s backwards"
}

function deactivateHelpBtn(){
    helpBtn.style.animation = "coolAnimation 0.2s backwards"
}

playBtn.addEventListener("mouseover", highlightPlayBtn)
playBtn.addEventListener("mouseout", deactivatePlayBtn)
helpBtn.addEventListener("mouseover", highlightHelpBtn)
helpBtn.addEventListener("mouseout", deactivateHelpBtn)

window.onload = playMain();


