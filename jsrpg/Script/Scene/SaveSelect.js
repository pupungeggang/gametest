var UISaveSelect = {
    titleText : [8, 60],
};

function loopSaveSelect() {
    displaySaveSelect();
}

function displaySaveSelect() {
    context.fillStyle = 'Black';
    context.strokeStyle = 'Black';
    context.lineWidth = 2;
    context.font = '60px Opensans';

    context.clearRect(0, 0, 1280, 800);

    // Title
    context.fillText(`Select save file`, UITitle.titleText[0], UITitle.titleText[1]);
}