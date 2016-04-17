/// <reference path = "_reference.ts" />
// global variables
var assets;
var canvas;
var stage;
var stats;
var currentScene;
var scene;
//var theme: string = "nighttheme";
// Game Scenes
var menu;
var play;
var end;
var instructions;
var levels;
var level1;
var level2;
var level3;
var win;
var assetData = [
    // Add your Assets here
    { id: "PlayButton", src: "../../Assets/images/PlayButton.png" },
    { id: "InstructionsButton", src: "../../Assets/images/InstructionsButton.png" },
    { id: "LevelsButton", src: "../../Assets/images/LevelsButton.png" },
    { id: "ExitButton", src: "../../Assets/images/ExitButton.png" },
    { id: "InstructionsBG", src: "../../Assets/images/instructionsBG.png" },
    { id: "CommonBackground", src: "../../Assets/images/sea.png" },
    { id: "Level1Sea", src: "../../Assets/images/sea1.png" },
    { id: "Level2Sea", src: "../../Assets/images/bg2.png" },
    { id: "Level3Sea", src: "../../Assets/images/bg1.jpg" },
    { id: "Level1Button", src: "../../Assets/images/Level1Button.png" },
    { id: "Level2Button", src: "../../Assets/images/Level2Button.png" },
    { id: "Level3Button", src: "../../Assets/images/Level3Button.png" },
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
    { id: "NextButton", src: "../../Assets/images/NextButton.png" },
    { id: "PlayAgainButton", src: "../../Assets/images/PlayAgainButton.png" },
    { id: "Fish", src: "../../Assets/images/player.png" },
    { id: "Fish1", src: "../../Assets/images/player1.png" },
    { id: "Level1Label", src: "../../Assets/images/Level1Label.png" },
    { id: "Level2Label", src: "../../Assets/images/Level2Label.png" },
    { id: "Level3Label", src: "../../Assets/images/Level3Label.png" },
    { id: "Level1Instructions", src: "../../Assets/images/Level1Instructions.png" },
    { id: "Level2Instructions", src: "../../Assets/images/Level2Instructions.png" },
    { id: "Level3Instructions", src: "../../Assets/images/Level3Instructions.png" },
    { id: "Coin", src: "../../Assets/images/Coin.png" },
    { id: "Coins", src: "../../Assets/images/coins.png" },
    { id: "CoinStack", src: "../../Assets/images/coinStack.png" },
    { id: "MoneyBag", src: "../../Assets/images/MoneyBag.png" },
    { id: "Star", src: "../../Assets/images/star.png" },
    { id: "Stars", src: "../../Assets/images/stars.png" },
    { id: "Crown", src: "../../Assets/images/crown.png" },
    { id: "GoldPot", src: "../../Assets/images/goldpot.png" },
    { id: "Eagle", src: "../../Assets/images/eagle.png" },
    { id: "Heart", src: "../../Assets/images/heart.png" },
    { id: "Shell", src: "../../Assets/images/shell.png" },
    { id: "Ring", src: "../../Assets/images/ring.png" },
    { id: "DiamondHeart", src: "../../Assets/images/diamondHeart.png" },
    { id: "GoldTreasure", src: "../../Assets/images/goldTreasure.png" },
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
    { id: "SeaMonster1Level3", src: "../../Assets/images/WaterDragon1Level3.png" },
    { id: "Bullet", src: "../../Assets/images/bullet.png" },
    { id: "Fireball", src: "../../Assets/images/fireball.png" },
    { id: "CongratsMessage", src: "../../Assets/images/congratsMessage.png" },
    { id: "FishDestroy1", src: "../../Assets/images/fishdestroy1.png" },
    { id: "FishDestroy2", src: "../../Assets/images/fishdestroy2.png" },
    { id: "FishDestroy3", src: "../../Assets/images/fishdestroy3.png" },
    { id: "FishDestroy4", src: "../../Assets/images/fishdestroy4.png" },
    { id: "FishDestroy5", src: "../../Assets/images/fishdestroy5.png" },
    { id: "FishDestroy6", src: "../../Assets/images/fishdestroy6.png" },
    { id: "FishDestroy7", src: "../../Assets/images/fishdestroy7.png" },
    { id: "FishDestroy8", src: "../../Assets/images/fishdestroy8.png" },
    { id: "FishDestroy9", src: "../../Assets/images/fishdestroy9.png" },
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
function init() {
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
function gameLoop(event) {
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
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // shows fps
    stats.domElement.style.position = "absolute";
    stats.domElement.style.left = "0px";
    stats.domElement.style.top = "0px";
    document.body.appendChild(stats.domElement);
}
// Finite State Machine used to change Scenes
function changeScene() {
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
//# sourceMappingURL=game.js.map