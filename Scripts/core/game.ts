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
            [1, 1, 150, 200, 0, 0, 0],
            [1, 203, 275, 136, 0, 0, 0],
            [153, 1, 686, 151, 0, 0, 0],
            [153, 154, 150, 45, 0, 0, 0],
            [278, 201, 250, 100, 0, 0, 0],
            [305, 154, 150, 45, 0, 0, 0],
            [457, 154, 150, 45, 0, 0, 0],
            [278, 303, 151, 41, 0, 0, 0],
            [431, 303, 150, 41, 0, 0, 0],
            [530, 201, 250, 100, 0, 0, 0],
            [583, 303, 149, 41, 0, 0, 0],
            [734, 303, 151, 40, 0, 0, 0],
            [609, 154, 151, 42, 0, 0, 0],
            [762, 154, 151, 42, 0, 0, 0],
            [782, 198, 200, 100, 0, 0, 0],
            [887, 300, 151, 42, 0, 0, 0],
            [841, 1, 200, 100, 0, 0, 0],
            [841, 103, 151, 42, 0, 0, 0],
            [915, 147, 151, 42, 0, 0, 0],
            [994, 103, 40, 40, 0, 0, 0],
            [1036, 103, 148, 39, 0, 0, 0],
            [1043, 1, 200, 100, 0, 0, 0],
            [984, 191, 200, 100, 0, 0, 0],
            [1040, 293, 100, 50, 0, 0, 0],
            [1142, 293, 100, 50, 0, 0, 0],
            [1068, 144, 30, 20, 0, 0, 0],
            [1068, 166, 20, 15, 0, 0, 0],
            [1186, 103, 200, 100, 0, 0, 0],
            [1245, 1, 200, 100, 0, 0, 0],
            [1186, 205, 90, 82, 0, 0, 0],
            [1244, 289, 100, 50, 0, 0, 0],
            [1278, 205, 100, 70, 0, 0, 0],
            [1346, 277, 70, 60, 0, 0, 0],
            [1380, 205, 100, 70, 0, 0, 0],
            [1388, 103, 200, 100, 0, 0, 0],
            [1447, 1, 150, 100, 0, 0, 0],
            [1418, 277, 60, 60, 0, 0, 0],
            [1480, 277, 60, 60, 0, 0, 0],
            [1482, 205, 70, 70, 0, 0, 0],
            [1542, 277, 60, 60, 0, 0, 0],
            [1554, 205, 70, 70, 0, 0, 0],
            [1590, 103, 150, 100, 0, 0, 0],
            [1599, 1, 100, 100, 0, 0, 0],
            [1701, 1, 70, 100, 0, 0, 0],
            [1604, 277, 60, 60, 0, 0, 0],
            [1626, 205, 60, 60, 0, 0, 0],
            [1666, 267, 60, 60, 0, 0, 0],
            [1688, 205, 100, 50, 0, 0, 0],
            [1742, 103, 198, 99, 0, 0, 0],
            [1942, 1, 100, 50, 0, 0, 0],
            [1942, 53, 100, 50, 0, 0, 0],
            [1942, 105, 100, 50, 0, 0, 0],
            [1942, 157, 100, 50, 0, 0, 0],
            [1728, 257, 100, 50, 0, 0, 0],
            [1790, 204, 100, 50, 0, 0, 0],
            [1830, 256, 100, 50, 0, 0, 0],
            [1932, 209, 100, 50, 0, 0, 0],
            [1932, 261, 100, 50, 0, 0, 0],
            [1773, 1, 70, 50, 0, 0, 0]
        ],

        "animations": {
            "SeaMonster3Level1": [0],
            "SeaMonster4Level1": [1],
            "CongratsMessage": [2],
            "Level1Label": [3],
            "SeaMonster5Level2": [4],
            "Level2Label": [5],
            "Level3Label": [6],
            "LevelsButton": [7],
            "NextButton": [8],
            "SeaMonster6Level2": [9],
            "Level1Button": [10],
            "InstructionsButton": [11],
            "BackButton": [12],
            "ExitButton": [13],
            "SeaMonster1Level3": [14],
            "Level2Button": [15],
            "SeaMonster2Level1": [16],
            "Level3Button": [17],
            "PlayAgainButton": [18],
            "Coin": [19],
            "PlayButton": [20],
            "SeaMonster2Level3": [21],
            "SeaMonster3Level3": [22],
            "Fireball": [25],
            "Bullet": [26],
            "SeaMonster4Level3": [27],
            "SeaMonster5Level3": [28],
            "SeaMonster1Level1": [29],
            "FishDestroy1": [30],
            "DiamondHeart": [31],
            "Shell": [32],
            "SeaMonster3Level2": [33],
            "SeaMonster6Level3": [34],
            "SeaMonster5Level1": [35],
            "CoinStack": [36],
            "Coins": [37],
            "GoldPot": [38],
            "GoldTreasure": [39],
            "Heart": [40],
            "SeaMonster6Level1": [41],
            "Stars": [42],
            "Eagle": [43],
            "MoneyBag": [44],
            "Ring": [45],
            "Star": [46],
            "FishDestroy2": [47],
            "SeaMonster1Level2": [48],
            "FishDestroy3": [49],
            "FishDestroy4": [50],
            "FishDestroy5": [51],
            "FishDestroy6": [52],
            "FishDestroy7": [53],
            "FishDestroy8": [54],
            "FishDestroy9": [55],
            "SeaMonster2Level2": [56],
            "SeaMonster4Level2": [57],
            "Crown": [58],
            "Fish":{
                        "frames":[23,24],
                        "speed":0.09
                    },
            "FishDestroy":{
                        "frames":[30,47,49,50,51,52,53,54,55],
                        "speed":0.2
                    },
             "SeaMonsterLevel3":{
                        "frames":[14,21,22],
                        "speed":0.05
             }
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