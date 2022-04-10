window.onload = main;
window.onerror = errorHandle;

function main() {
    canvas = document.getElementById('game');
    context = canvas.getContext('2d');
    canvasRect = cavnas.getBoundingClientRect();

    canvas.addEventListener('mouseup', mouseUp, false);

    gameInstance = setInterval(loop, 25);
}

function errorHandle() {
    clearInterval(gameInstance);
}

function loop() {

}