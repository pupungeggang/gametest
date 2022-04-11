var canvas;
var context;
var canvasRect;

var gameInstance;
var scene = 'Title';
var state = '';

var save = {
    0 : ['New'],
    1 : ['New'],
    2 : ['New'],
};

var player = {
    level : 0,
    exp : 0,
    expMax : 0,
    life : 20,

    card : [],
    equip : [],
    item : [],
    deck : [],
};

var field = {
    wall : [],
    portal : [],
    object : [],

    playerPosition : [],
    camera : [],
};

var battle = {
    
};