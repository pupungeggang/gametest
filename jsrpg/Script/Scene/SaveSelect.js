var UISaveSelect = {
    titleText : [8, 60],
    saveRect : [[160, 160, 960, 160],
                [160, 320, 960, 160],
                [160, 480, 960, 160]],
    saveText1 : [[168, 220], [168, 380], [168, 540]],
    saveText2 : [[168, 300], [168, 460], [168, 620]],
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

    // Save Select
    for (var i = 0; i < 3; i++) {
        context.strokeRect(UISaveSelect.saveRect[i][0], UISaveSelect.saveRect[i][1], UISaveSelect.saveRect[i][2], UISaveSelect.saveRect[i][3]);
        context.fillText(`Save${i + 1}`, UISaveSelect.saveText1[i][0], UISaveSelect.saveText1[i][1]);
    }
}

function mouseUpSaveSelect(x, y) {
    if (state === '') {
        for (var i = 0; i < 3; i++) {
            if (pointInsideRect(x, y, UISaveSelect.saveRect[i][0], UISaveSelect.saveRect[i][1], UISaveSelect.saveRect[i][2], UISaveSelect.saveRect[i][3])) {
                scene = 'Field';
            }
        }
    }
}