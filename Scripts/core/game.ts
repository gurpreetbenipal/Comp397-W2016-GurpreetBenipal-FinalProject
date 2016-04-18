/// <reference path = "_reference.ts" />

// global variables
var assets: createjs.LoadQueue;
var canvas: HTMLElement;
var stage: createjs.Stage;
var stats: Stats;
var textureAtlas: createjs.SpriteSheet;
var currentScene: objects.Scene;
var scene: number;

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
        [689, 1, 250, 100, 0, 0, 0],
        [1, 292, 250, 100, 0, 0, 0],
        [278, 154, 200, 100, 0, 0, 0],
        [941, 1, 200, 100, 0, 0, 0],
        [480, 154, 200, 100, 0, 0, 0],
        [1143, 1, 200, 100, 0, 0, 0],
        [1345, 1, 200, 100, 0, 0, 0],
        [1547, 1, 200, 100, 0, 0, 0],
        [1749, 1, 200, 100, 0, 0, 0],
        [689, 103, 200, 100, 0, 0, 0],
        [891, 103, 200, 100, 0, 0, 0],
        [1093, 103, 200, 100, 0, 0, 0],
        [1295, 103, 200, 100, 0, 0, 0],
        [1497, 103, 198, 99, 0, 0, 0],
        [1697, 103, 150, 200, 0, 0, 0],
        [1849, 103, 150, 100, 0, 0, 0],
        [1849, 205, 150, 100, 0, 0, 0],
        [682, 205, 150, 45, 0, 0, 0],
        [834, 205, 150, 45, 0, 0, 0],
        [986, 205, 150, 45, 0, 0, 0],
        [1138, 205, 151, 42, 0, 0, 0],
        [1291, 205, 151, 42, 0, 0, 0],
        [278, 256, 151, 40, 0, 0, 0],
        [431, 256, 151, 42, 0, 0, 0],
        [253, 298, 151, 42, 0, 0, 0],
        [253, 342, 151, 42, 0, 0, 0],
        [406, 300, 151, 41, 0, 0, 0],
        [406, 343, 150, 41, 0, 0, 0],
        [682, 252, 149, 41, 0, 0, 0],
        [833, 252, 148, 39, 0, 0, 0],
        [983, 252, 100, 70, 0, 0, 0],
        [584, 256, 90, 82, 0, 0, 0],
        [676, 295, 100, 50, 0, 0, 0],
        [558, 347, 100, 50, 0, 0, 0],
        [660, 347, 100, 50, 0, 0, 0],
        [762, 347, 100, 50, 0, 0, 0],
        [778, 295, 100, 50, 0, 0, 0],
        [864, 347, 100, 50, 0, 0, 0],
        [880, 293, 100, 50, 0, 0, 0],
        [1085, 252, 70, 100, 0, 0, 0],
        [1157, 249, 100, 100, 0, 0, 0],
        [1259, 249, 100, 70, 0, 0, 0],
        [1361, 249, 70, 70, 0, 0, 0],
        [1259, 321, 100, 50, 0, 0, 0],
        [1361, 321, 70, 50, 0, 0, 0],
        [982, 324, 100, 50, 0, 0, 0],
        [1497, 204, 100, 50, 0, 0, 0],
        [1599, 204, 70, 70, 0, 0, 0],
        [1433, 256, 100, 50, 0, 0, 0],
        [1433, 308, 100, 50, 0, 0, 0],
        [1535, 256, 60, 60, 0, 0, 0],
        [1597, 276, 70, 60, 0, 0, 0],
        [1535, 318, 60, 60, 0, 0, 0],
        [1597, 338, 100, 50, 0, 0, 0],
        [1699, 305, 60, 60, 0, 0, 0],
        [1761, 305, 60, 60, 0, 0, 0],
        [1823, 307, 60, 60, 0, 0, 0],
        [1885, 307, 60, 60, 0, 0, 0],
        [1951, 1, 40, 40, 0, 0, 0],
        [1444, 205, 30, 20, 0, 0, 0],
        [559, 300, 20, 15, 0, 0, 0]
    ],

    "animations": {
        "CongratsMessage": [0],
        "SeaMonster4Level1": [1],
        "SeaMonster5Level2": [2],
        "SeaMonster6Level2": [3],
        "DeadMonster1": [4],
        "DeadMonster2": [5],
        "DeadMonster3": [6],
        "DeadMonster4": [7],
        "SeaMonster1Level3": [8],
        "SeaMonster2Level1": [9],
        "SeaMonster2Level3": [10],
        "SeaMonster3Level3": [11],
        "SeaMonster4Level3": [12],
        "SeaMonster5Level3": [13],
        "SeaMonster6Level3": [14],
        "SeaMonster1Level2": [15],
        "SeaMonster3Level1": [16],
        "SeaMonster5Level1": [17],
        "SeaMonster6Level1": [18],
        "Level1Label": [19],
        "Level2Label": [20],
        "Level3Label": [21],
        "BackButton": [22],
        "ExitButton": [23],
        "InstructionsButton": [24],
        "Level2Button": [25],
        "Level3Button": [26],
        "PlayAgainButton": [27],
        "LevelsButton": [28],
        "NextButton": [29],
        "Level1Button": [30],
        "PlayButton": [31],
        "DiamondHeart": [32],
        "SeaMonster1Level1": [33],
        //"Fish": [34],
        //"Fish1": [35],
        "FishDestroy1": [36],
        "FishDestroy2": [37],
        "FishDestroy3": [38],
        "FishDestroy4": [39],
        "FishDestroy5": [40],
        "Eagle": [41],
        "Stars": [42],
        "SeaMonster3Level2": [43],
        "GoldPot": [44],
        "FishDestroy6": [45],
        "Crown": [46],
        "FishDestroy7": [47],
        "FishDestroy8": [48],
        "Heart": [49],
        "FishDestroy9": [50],
        "SeaMonster2Level2": [51],
        "CoinStack": [52],
        "Shell": [53],
        "Coins": [54],
        "SeaMonster4Level2": [55],
        "GoldTreasure": [56],
        "MoneyBag": [57],
        "Ring": [58],
        "Star": [59],
        "Coin": [60],
        "Fireball": [61],
        "Bullet": [62],
        "Fish": {
            "frames": [34, 35],
            "speed": 0.09
        },
        "FishDestroy": {
            "frames": [36, 37, 38, 39, 40, 45, 47, 48],
            "speed": 0.2
        },
        "SeaMonsterLevel3": {
            "frames": [8, 10, 11],
            "speed": 0.05
        },
        "DeadMonster": {
            "frames": [4, 5, 6, 7],
            "speed": 0.05
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
    { id: "Fireball", src: "../../Assets/images/Fireball.png" },
    { id: "GameOver", src: "../../Assets/images/GameOver.png" },
    { id: "Welcome", src: "../../Assets/images/Welcome.png" },


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