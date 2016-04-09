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
var levels;
var level1;
var level2;
var level3;
var assetData = [
    // Add your Assets here
    { id: "PlayButton", src: "../../Assets/images/PlayButton.png" },
    { id: "InstructionsButton", src: "../../Assets/images/InstructionsButton.png" },
    { id: "LevelsButton", src: "../../Assets/images/LevelsButton.png" },
    { id: "Sea", src: "../../Assets/images/sea.png" },
    { id: "Level2Sea", src: "../../Assets/images/sea1.png" },
    { id: "Level3Sea", src: "../../Assets/images/sea2.png" },
    { id: "Level1Button", src: "../../Assets/images/Level1Button.png" },
    { id: "Level2Button", src: "../../Assets/images/Level2Button.png" },
    { id: "Level3Button", src: "../../Assets/images/Level3Button.png" },
    { id: "BackButton", src: "../../Assets/images/BackButton.png" },
    { id: "PlayAgainButton", src: "../../Assets/images/PlayAgainButton.png" },
    { id: "Fish", src: "../../Assets/images/fish.png" },
    { id: "Coin", src: "../../Assets/images/Coin.png" },
    { id: "Coins", src: "../../Assets/images/coins.png" },
    { id: "CoinStack", src: "../../Assets/images/coinStack.png" },
    { id: "MoneyBag", src: "../../Assets/images/MoneyBag.png" },
    { id: "Star", src: "../../Assets/images/star.png" },
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
    { id: "buttonpress", src: "../../Assets/audio/buttonpress.wav" },
    { id: "gamestartsound", src: "../../Assets/audio/gamestart.wav" },
    { id: "nightplaysound", src: "../../Assets/audio/gamesound.wav" },
    { id: "dayplaysound", src: "../../Assets/audio/playsound.mp3" },
    { id: "firehit", src: "../../Assets/audio/firehit.wav" },
    { id: "pickupitem", src: "../../Assets/audio/pickupitem.wav" },
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
            // show the PLAY scene
            stage.removeAllChildren();
            play = new scenes.Play();
            currentScene = play;
            console.log("Starting PLAY Scene");
            break;
        case config.Scene.END:
            // show the END scene
            stage.removeAllChildren();
            end = new scenes.End();
            currentScene = end;
            console.log("Starting END Scene");
            break;
        case config.Scene.LEVELS:
            // show the LEVELS scene
            stage.removeAllChildren();
            levels = new scenes.Levels();
            currentScene = levels;
            console.log("Starting LEVELS Scene");
            break;
        case config.Scene.LEVEL1:
            // show the LEVELS scene
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
    }
    console.log(currentScene.numChildren);
}
window.onload = preload;
//# sourceMappingURL=game.js.map