//Sounds
menuSong = document.getElementById("menu_audio");
hoverSelection = document.getElementById("hover_selection");
clickSelection = document.getElementById("click_selection");
chooseWiselySong = document.getElementById("choose_wisely");

//btns
understandBtn = document.getElementById("understand")
fakeBtns = document.getElementsByClassName("fakeButton");
playBtn = document.getElementById("playBtn");
helpBtn = document.getElementById("helpBtn");
backBtn = document.getElementById("backBtn");
chooseCave = document.getElementById("chooseCave");

//screens
warningScreen = document.getElementById("warning");
startScreen = document.getElementById("startscreen");
helpScreen = document.getElementById("helpscreen");
caveScreen = document.getElementById("chooseCave");
titleName = document.getElementById("titleName");
darknessScreen = document.getElementById("light");
var pos = document.documentElement;

//Functions
function playHover(){
    hoverSelection.currentTime = 0;
    hoverSelection.play();
}

function playSelected(){
    clickSelection.play();
}

function showMyStartBtns(){
    for (let i = 0; i < fakeBtns.length; i++){
        fakeBtns[i].style.display = "block"
        fakeBtns[i].style.animation = "buttonOnOpen 0.5s"
    }
}

function switchToHelpScreen(){
    titleName.style.animation = "buttonOnOpen 0.5s reverse forwards";
    playBtn.style.animation = "buttonOnOpen 0.5s reverse forwards";
    setTimeout(helperSwticherTH, 2000);   
}

function helperSwticherTH(){
    startScreen.style.display = "none"
    helpScreen.style.display = "block";
}

function helperSwitcherTP(){
    startScreen.style.display = "none"
    caveScreen.style.display = "block";
    darknessScreen.style.display = "block";
    menuSong.pause()
    chooseWiselySong.play()
    shuffleCaves()
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

function switchToMainScreen(){
    helpScreen.style.display = "none";
    startScreen.style.display = "block";
    titleName.style.animation = "buttonOnOpen 0.2s forwards";
    playBtn.style.animation = "buttonOnOpen 0.2s forwards";
}

function switchToCaveScreen(){
    titleName.style.animation = "buttonOnOpen 0.5s reverse forwards";
    helpBtn.style.animation = "buttonOnOpen 0.5s reverse forwards";
    setTimeout(helperSwitcherTP, 2000);
}

function switchToMainScreenWM(){
    setTimeout(switchToMainScreenHelperWM, 2000)
}

function switchToMainScreenHelperWM(){
    warningScreen.style.display = "none";
    startScreen.style.display = "block";
    menuSong.volume = 0.5
    menuSong.play();
    setTimeout(showMyStartBtns, 1000)
}

function shuffleCaves(){
    var goodChoice = document.createElement("div");
    var badChoice = document.createElement("div");
    var order = Math.floor(Math.random()*2)
    goodChoice.className = "caveOption";
    badChoice.className = "caveOption";
    goodChoice.id = "correct";
    badChoice.id = "incorrect";
    goodChoice.addEventListener("click", good)
    badChoice.addEventListener("click", bad)
    if (order == 0){
        chooseCave.appendChild(goodChoice);
        chooseCave.appendChild(badChoice);
    }
    else{
        chooseCave.appendChild(badChoice);
        chooseCave.appendChild(goodChoice);
    }
}

function good(){
    alert("I work! good")
}

function bad(){
    alert("I work! bad")
}

playBtn.addEventListener("mouseover", highlightPlayBtn)
playBtn.addEventListener("mouseout", deactivatePlayBtn)
helpBtn.addEventListener("mouseover", highlightHelpBtn)
helpBtn.addEventListener("mouseout", deactivateHelpBtn)
helpBtn.addEventListener("click", switchToHelpScreen)
backBtn.addEventListener("click", switchToMainScreen)
playBtn.addEventListener("click", switchToCaveScreen)
understandBtn.addEventListener("click", switchToMainScreenWM)
pos.addEventListener("mousemove", e =>{
    pos.style.setProperty("--x", e.clientX + "px")
    pos.style.setProperty("--y", e.clientY + "px")
})


