function saveInit() {
    if (localStorage.getItem('Desserterria-RPG') === null || localStorage.getItem('Desserterria-RPG') === '[object Object]') {
        localStorage.setItem('Desserterria-RPG', JSON.toString(emptySave));
    }

    loadData();
}

function saveData() {
    localStorage.setItem('Desserterria-RPG', JSON.toString(save));
}

function loadData() {
    save = JSON.parse(localStorage.getItem('Desserterria-RPG'));
}

function startNewGame() {
    
}

function loadField() {

}