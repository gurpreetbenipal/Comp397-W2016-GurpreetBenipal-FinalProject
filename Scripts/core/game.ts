/// <reference path = "_reference.ts" />

// global variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var textureAtlas: createjs.SpriteSheet;

var currentScene: objects.Scene;
var scene: number;
//var theme: string = "nighttheme";

// Game Scenes
var menu: scenes.Menu;
var play: scenes.Play;
var end: scenes.End;
var instructions: scenes.Instructions;
var levels: scenes.Levels;
var level1: scenes.Level1;
var level2: scenes.Level2;
var level3: scenes.Level3;
var win: scenes.Win;

var atlas = {
        "images": [
            "../../Assets/images/atlas.png"
        ],
        "frames": [
            [1, 1, 686, 151, 0, 0, 0],
            [1, 154, 275, 136, 0, 0, 0],
            [1, 292, 150, 200, 0, 0, 0],
            [689, 1, 250, 100, 0, 0, 0],
            [278, 154, 250, 100, 0, 0, 0],
            [941, 1, 200, 100, 0, 0, 0],
            [530, 154, 200, 100, 0, 0, 0],
            [732, 103, 198, 99, 0, 0, 0],
            [932, 103, 150, 100, 0, 0, 0],
            [153, 292, 150, 100, 0, 0, 0],
            [153, 394, 100, 100, 0, 0, 0],
            [732, 204, 150, 45, 0, 0, 0],
            [305, 256, 150, 45, 0, 0, 0],
            [305, 303, 150, 45, 0, 0, 0],
            [457, 256, 151, 42, 0, 0, 0],
            [457, 300, 151, 42, 0, 0, 0],
            [305, 350, 151, 42, 0, 0, 0],
            [255, 394, 151, 42, 0, 0, 0],
            [255, 438, 151, 42, 0, 0, 0],
            [458, 344, 151, 41, 0, 0, 0],
            [610, 256, 90, 82, 0, 0, 0],
            [1084, 103, 70, 100, 0, 0, 0],
            [458, 387, 151, 40, 0, 0, 0],
            [611, 340, 100, 70, 0, 0, 0],
            [732, 251, 150, 41, 0, 0, 0],
            [702, 294, 149, 41, 0, 0, 0],
            [713, 337, 148, 39, 0, 0, 0],
            [713, 378, 100, 50, 0, 0, 0],
            [611, 412, 100, 50, 0, 0, 0],
            [713, 430, 100, 50, 0, 0, 0],
            [884, 205, 100, 70, 0, 0, 0],
            [986, 205, 100, 50, 0, 0, 0],
            [1088, 205, 100, 50, 0, 0, 0],
            [986, 257, 100, 50, 0, 0, 0],
            [1088, 257, 100, 50, 0, 0, 0],
            [884, 277, 100, 50, 0, 0, 0],
            [863, 329, 100, 50, 0, 0, 0],
            [986, 309, 100, 50, 0, 0, 0],
            [1088, 309, 100, 50, 0, 0, 0],
            [815, 381, 100, 50, 0, 0, 0],
            [815, 433, 70, 70, 0, 0, 0],
            [887, 433, 70, 70, 0, 0, 0],
            [917, 381, 70, 50, 0, 0, 0],
            [989, 361, 100, 50, 0, 0, 0],
            [1091, 361, 70, 60, 0, 0, 0],
            [959, 433, 60, 60, 0, 0, 0],
            [1021, 413, 60, 60, 0, 0, 0],
            [1083, 423, 60, 60, 0, 0, 0],
            [689, 103, 40, 40, 0, 0, 0],
            [408, 429, 60, 60, 0, 0, 0],
            [470, 429, 60, 60, 0, 0, 0],
            [532, 429, 60, 60, 0, 0, 0],
            [1143, 1, 30, 20, 0, 0, 0],
            [278, 256, 20, 15, 0, 0, 0]
        ],

        "animations": {
            "CongratsMessage": [0],
            "SeaMonster4Level1": [1],
            "SeaMonster3Level1": [2],
            "SeaMonster5Level2": [3],
            "SeaMonster6Level2": [4],
            "SeaMonster1Level3": [5],
            "SeaMonster2Level1": [6],
            "SeaMonster1Level2": [7],
            "SeaMonster5Level1": [8],
            "SeaMonster6Level1": [9],
            "Stars": [10],
            "Level1Label": [11],
            "Level2Label": [12],
            "Level3Label": [13],
            "BackButton": [14],
            "ExitButton": [15],
            "Level2Button": [16],
            "Level3Button": [17],
            "PlayAgainButton": [18],
            "LevelsButton": [19],
            "SeaMonster1Level1": [20],
            "Eagle": [21],
            "InstructionsButton": [22],
            "DiamondHeart": [23],
            "NextButton": [24],
            "Level1Button": [25],
            "PlayButton": [26],
            //"Fish": [27],
           // "Fish1": [28],
            "Fish":{
                "frames":[27,28],
                "speed":0.09
            },
            "FishDestroy":{
                "frames":[29,31,32,33,34,35,36,37,38],
                "speed":0.2
            },
            "FishDestroy1": [29],
            "SeaMonster3Level2": [30],
            "FishDestroy2": [31],
            "FishDestroy3": [32],
            "FishDestroy4": [33],
            "FishDestroy5": [34],
            "FishDestroy6": [35],
            "FishDestroy7": [36],
            "FishDestroy8": [37],
            "FishDestroy9": [38],
            "SeaMonster2Level2": [39],
            "GoldPot": [40],
            "Heart": [41],
            "Crown": [42],
            "SeaMonster4Level2": [43],
            "Shell": [44],
            "CoinStack": [45],
            "Coins": [46],
            "GoldTreasure": [47],
            "Coin": [48],
            "MoneyBag": [49],
            "Ring": [50],
            "Star": [51],
            "Fireball": [52],
            "Bullet": [53]
        }
}



var assetData: objects.Asset[] = [
    // Add your Assets here
    { id: "InstructionsBG", src: "../../Assets/images/InstructionsBG.png" },
    { id: "CommonBackground", src: "../../Assets/images/CommonBackground.png" },
    { id: "Level1Sea", src: "../../Assets/images/Level1Sea.png" },
    { id: "Level2Sea", src: "../../Assets/images/Level2Sea.png" },
    { id: "Level3Sea", src: "../../Assets/images/Level3Sea.jpg" },
    
    /*
    { id: "PlayButton", src: "../../Assets/images/PlayButton.png" },
    { id: "InstructionsButton", src: "../../Assets/images/InstructionsButton.png" },
    { id: "LevelsButton", src: "../../Assets/images/LevelsButton.png" },
    { id: "ExitButton", src: "../../Assets/images/ExitButton.png" },
    { id: "Level1Button", src: "../../Assets/images/Level1Button.png" },
    { id: "Level2Button", src: "../../Assets/images/Level2Button.png" },
    { id: "Level3Button", src: "../../Assets/images/Level3Button.png" },
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
    { id: "NextButton", src: "../../Assets/images/NextButton.png" },
    { id: "PlayAgainButton", src: "../../Assets/images/PlayAgainButton.png" },
    
    { id: "Fish", src: "../../Assets/images/Fish.png" },
    { id: "Fish1", src: "../../Assets/images/Fish1.png" },
    */
    { id: "Level1Label", src: "../../Assets/images/Level1Label.png" },
    { id: "Level2Label", src: "../../Assets/images/Level2Label.png" },
    { id: "Level3Label", src: "../../Assets/images/Level3Label.png" },
    
    { id: "Level1Instructions", src: "../../Assets/images/Level1Instructions.png" },
    { id: "Level2Instructions", src: "../../Assets/images/Level2Instructions.png" },
    { id: "Level3Instructions", src: "../../Assets/images/Level3Instructions.png" },

    { id: "Coin", src: "../../Assets/images/Coin.png" },
    { id: "Coins", src: "../../Assets/images/Coins.png" },
    { id: "CoinStack", src: "../../Assets/images/CoinStack.png" },
    { id: "MoneyBag", src: "../../Assets/images/MoneyBag.png" },
    { id: "Star", src: "../../Assets/images/Star.png" },
    
    { id: "Stars", src: "../../Assets/images/Stars.png" },
    { id: "Crown", src: "../../Assets/images/Crown.png" },
    { id: "GoldPot", src: "../../Assets/images/GoldPot.png" },
    { id: "Eagle", src: "../../Assets/images/Eagle.png" },
    { id: "Heart", src: "../../Assets/images/Heart.png" },
    
    { id: "Shell", src: "../../Assets/images/Shell.png" },
    { id: "Ring", src: "../../Assets/images/Ring.png" },
    { id: "DiamondHeart", src: "../../Assets/images/DiamondHeart.png" },
    { id: "GoldTreasure", src: "../../Assets/images/GoldTreasure.png" },

    { id: "SeaMonster1Level1", src: "../../Assets/images/SeaMonster1Level1.png" },
    { id: "SeaMonster2Level1", src: "../../Assets/images/SeaMonster2Level1.png" },
    { id: "SeaMonster3Level1", src: "../../Assets/images/SeaMonster3Level1.png" },
    { id: "SeaMonster4Level1", src: "../../Assets/images/SeaMonster4Level1.png" },
    { id: "SeaMonster5Level1", src: "../../Assets/images/SeaMonster5Level1.png" },
    { id: "SeaMonster6Level1", src: "../../Assets/images/SeaMonster6Level1.png" },

    { id: "SeaMonster1Level2", src: "../../Assets/images/SeaMonster1Level2.png" },
    { id: "SeaMonster2Level2", src: "../../Assets/images/SeaMonster2Level2.png" },
    { id: "SeaMonster3Level2", src: "../../Assets/images/SeaMonster3Level2.png" },
    { id: "SeaMonster4Level2", src: "../../Assets/images/SeaMonster4Level2.png" },
    { id: "SeaMonster5Level2", src: "../../Assets/images/SeaMonster5Level2.png" },
    { id: "SeaMonster6Level2", src: "../../Assets/images/SeaMonster6Level2.png" },
    
    { id: "SeaMonster1Level3", src: "../../Assets/images/SeaMonster1Level3.png" },
    
    { id: "Bullet", src: "../../Assets/images/Bullet.png" },
    { id: "Fireball", src: "../../Assets/images/Fireball.png"},
    { id: "CongratsMessage", src: "../../Assets/images/CongratsMessage.png"},

    { id: "FishDestroy1", src: "../../Assets/images/FishDestroy1.png" },
    { id: "FishDestroy2", src: "../../Assets/images/FishDestroy2.png" },
    { id: "FishDestroy3", src: "../../Assets/images/FishDestroy3.png" },
    { id: "FishDestroy4", src: "../../Assets/images/FishDestroy4.png" },
    { id: "FishDestroy5", src: "../../Assets/images/FishDestroy5.png" },
    { id: "FishDestroy6", src: "../../Assets/images/FishDestroy6.png" },
    { id: "FishDestroy7", src: "../../Assets/images/FishDestroy7.png" },
    { id: "FishDestroy8", src: "../../Assets/images/FishDestroy8.png" },
    { id: "FishDestroy9", src: "../../Assets/images/FishDestroy9.png" },

    { id: "buttonpress", src: "../../Assets/audio/buttonpress.wav" },
    { id: "firehit", src: "../../Assets/audio/firehit.wav" },
    { id: "pickupitem", src: "../../Assets/audio/pickupitem.wav" },
    { id: "SeaWavesSound", src: "../../Assets/audio/seawaves.wav" },
    { id: "Level1Sound", src: "../../Assets/audio/level1Sound.wav" },
    { id: "Level2Sound", src: "../../Assets/audio/level2Sound.wav" },
    { id: "Level3Sound", src: "../../Assets/audio/level3Sound.mp3" },
    { id: "MonsterEatFish", src: "../../Assets/audio/monstereatfish.wav" },
    { id: "BulletSound", src: "../../Assets/audio/bulletfired.wav" },
];

function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    assets.on("complete", init, this);
    assets.loadManifest(assetData);
}

function init(): void {
    //Instantiate TextureAtlas
    textureAtlas = new createjs.SpriteSheet(atlas);
    
    // create a reference the HTML canvas Element
    canvas = document.getElementById("canvas");
    
    // create our main display list container
    stage = new createjs.Stage(canvas);
    
    // Enable mouse events
    stage.enableMouseOver(20);
    
    // set the framerate to 60 frames per second
    createjs.Ticker.setFPS(config.Game.FPS);
    
    // create an event listener to count off frames
    createjs.Ticker.on("tick", gameLoop, this);
    
    // sets up our stats counting workflow
    setupStats(); 
    
    // set initial scene
    scene = config.Scene.MENU;
    changeScene();
}

// Main Game Loop function that handles what happens each "tick" or frame
function gameLoop(event: createjs.Event): void {
    // start collecting stats for this frame
    stats.begin(); 
    
    // calling State's update method
    currentScene.update(); 
    
    // redraw/refresh stage every frame
    stage.update();
    
    // stop collecting stats for this frame
    stats.end();
}

// Setup Game Stats
function setupStats(): void {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}

// Finite State Machine used to change Scenes
function changeScene(): void {
    
    // Launch various scenes
    switch (scene) {
        case config.Scene.MENU:
            // show the MENU scene
            stage.removeAllChildren();
            menu = new scenes.Menu();
            currentScene = menu;
            console.log("Starting MENU Scene");
            break;
        case config.Scene.PLAY:
            // show the LEVEL1 scene
            stage.removeAllChildren();
            level1 = new scenes.Level1();
            currentScene = level1;
            console.log("Starting LEVEL 1 Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
        case config.Scene.INSTRCUTIONS:
            // show the INSTRCUTIONS scene
            stage.removeAllChildren();
            instructions = new scenes.Instructions();
            currentScene = instructions;
            console.log("Starting INSTRCUTIONS Scene");
            break;
        case config.Scene.LEVELS:
            // show the LEVELS scene
            stage.removeAllChildren();
            levels = new scenes.Levels();
            currentScene = levels;
            console.log("Starting LEVELS Scene");
            break;
        case config.Scene.LEVEL1:
            // show the LEVEL1 scene
            stage.removeAllChildren();
            level1 = new scenes.Level1();
            currentScene = level1;
            console.log("Starting LEVEL 1 Scene");
            break;
        case config.Scene.LEVEL2:
            // show the LEVELS scene
            stage.removeAllChildren();
            level2 = new scenes.Level2();
            currentScene = level2;
            console.log("Starting LEVEL 2 Scene");
            break;
        case config.Scene.LEVEL3:
            // show the LEVELS scene
            stage.removeAllChildren();
            level3 = new scenes.Level3();
            currentScene = level3;
            console.log("Starting LEVEL 3 Scene");
            break;
        case config.Scene.WIN:
            // show the WIN scene
            stage.removeAllChildren();
            win = new scenes.Win();
            currentScene = win;
            console.log("Starting WIN Scene");
            break;
    }

    console.log(currentScene.numChildren);
}

window.onload = preload;