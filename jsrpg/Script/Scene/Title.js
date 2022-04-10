var UITitle = {
    titleText : [8, 60],
    startButton : [160, 160, 960, 80],
    startText : [168, 220],
    optionButton : [160, 240, 960, 80],
    optionText : [168, 300],
    aboutButton : [160, 320, 960, 80],
    aboutText : [168, 380],
    versionText : [8, 780],
};

function loopTitle() {
    displayTitle();
}

function displayTitle() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.lineWidth = 2;
    context.font = '60px Opensans';

    context.clearRect(0, 0, 1280, 800);

    // Title
    context.fillText(`DesserterriaRPG`, UITitle.titleText[0], UITitle.titleText[1]);
    
    // Button
    context.strokeRect(UITitle.startButton[0], UITitle.startButton[1], UITitle.startButton[2], UITitle.startButton[3]);
    context.fillText(`Start Game`, UITitle.startText[0], UITitle.startText[1]);
    context.strokeRect(UITitle.optionButton[0], UITitle.optionButton[1], UITitle.optionButton[2], UITitle.optionButton[3]);
    context.fillText(`Option`, UITitle.optionText[0], UITitle.optionText[1]);
    context.strokeRect(UITitle.aboutButton[0], UITitle.aboutButton[1], UITitle.aboutButton[2], UITitle.aboutButton[3]);
    context.fillText(`About`, UITitle.aboutText[0], UITitle.aboutText[1]);

    // Version Text
    context.fillText(`v0.0.1`, UITitle.versionText[0], UITitle.versionText[1]);
}

function mouseUpTitle(x, y) {
    if (state === '') {
        if (pointInsideRect(x, y, UITitle.startButton[0], UITitle.startButton[1], UITitle.startButton[2], UITitle.startButton[3])) {
            scene = 'SaveSelect';
        }
    }
}