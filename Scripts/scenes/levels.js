var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEVELS SCENE
var scenes;
(function (scenes) {
    //LEVELS CLASS ++++++++++++++++++++++++++++++++
    var Levels = (function (_super) {
        __extends(Levels, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++
        function Levels() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++++
        // Start Method
        Levels.prototype.start = function () {
            // Stop the Previous Background Music
            createjs.Sound.stop();
            // Generate the Background Music Infinitely
            createjs.Sound.play("SeaWavesSound", { "loop": -1 });
            // added Sea to the scene
            this._sea = new objects.Sea("Level1Sea");
            this.addChild(this._sea);
            //Add TITLE Label
            this._titleLabel = new objects.Label("Select Your Level", "bold 24px Consolas", "#0033cc", config.Screen.CENTER_X, 30, true);
            this.addChild(this._titleLabel);
            // add the LEVEL1 button to the Levels scene
            this._level1Button = new objects.Button("Level1Button", config.Screen.CENTER_X, config.Screen.CENTER_Y - 100, true);
            this.addChild(this._level1Button);
            // LEVEL1 Button event listener
            this._level1Button.on("click", this._level1ButtonClick, this);
            // add the LEVEL2 button to the Levels scene
            this._level2Button = new objects.Button("Level2Button", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._level2Button);
            // INSTRUCTIONS Button event listener
            this._level2Button.on("click", this._level2ButtonClick, this);
            // add the LEVEL3 button to the MENU scene
            this._level3Button = new objects.Button("Level3Button", config.Screen.CENTER_X, config.Screen.CENTER_Y + 100, true);
            this.addChild(this._level3Button);
            // LEVEL3 Button event listener
            this._level3Button.on("click", this._level3ButtonClick, this);
            // add the BACK button to the MENU scene
            this._backButton = new objects.Button("BackButton", config.Screen.CENTER_X + 230, config.Screen.CENTER_Y + 200, true);
            this.addChild(this._backButton);
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // Menu Scene updates here
        Levels.prototype.update = function () {
            this._sea.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // LEVEL1 Button click event handler
        Levels.prototype._level1ButtonClick = function (event) {
            createjs.Sound.play("buttonpress");
            // Switch to the LEVEL1 Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        };
        // LEVEL2 Button click event handler
        Levels.prototype._level2ButtonClick = function (event) {
            createjs.Sound.play("buttonpress");
            // Switch to the LEVEL2 Scene
            scene = config.Scene.LEVEL2;
            changeScene();
        };
        // LEVEL3 Button click event handler
        Levels.prototype._level3ButtonClick = function (event) {
            createjs.Sound.play("buttonpress");
            // Switch to the LEVEL3 Scene
            scene = config.Scene.LEVEL3;
            changeScene();
        };
        // BACK Button click event handler
        Levels.prototype._backButtonClick = function (event) {
            createjs.Sound.play("buttonpress");
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Levels;
    })(objects.Scene);
    scenes.Levels = Levels;
})(scenes || (scenes = {}));
//# sourceMappingURL=levels.js.map