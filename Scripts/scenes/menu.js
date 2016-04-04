var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    //MENU CLASS ++++++++++++++++++++++++++++++++
    var Menu = (function (_super) {
        __extends(Menu, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++
        function Menu() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++++
        // Start Method
        Menu.prototype.start = function () {
            // added Sky to the scene
            this._sea = new objects.Sea();
            this.addChild(this._sea);
            //Add WELCOME Label
            this._welcomeLabel = new objects.Label("WELCOME TO 'THE SEA WORLD'", "bold 24px Cambiria", "#009900", config.Screen.CENTER_X + 30, 30, true);
            this.addChild(this._welcomeLabel);
            // add the PLAY button to the MENU scene
            this._playButton = new objects.Button("PlayButton", config.Screen.CENTER_X, config.Screen.CENTER_Y - 100, true);
            this.addChild(this._playButton);
            // Play Button event listener
            this._playButton.on("click", this._playButtonClick, this);
            // add the INSTRUCTIONS button to the MENU scene
            this._instructionsButton = new objects.Button("InstructionsButton", config.Screen.CENTER_X, config.Screen.CENTER_Y, true);
            this.addChild(this._instructionsButton);
            // INSTRUCTIONS Button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            // add the LEVELS button to the MENU scene
            this._levelsButton = new objects.Button("LevelsButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 100, true);
            this.addChild(this._levelsButton);
            // LEVELS Button event listener
            this._levelsButton.on("click", this._levelsButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // Menu Scene updates here
        Menu.prototype.update = function () {
            this._sea.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PLAY Button click event handler
        Menu.prototype._playButtonClick = function (event) {
            createjs.Sound.play("buttonpress");
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            // Switch the THEME of the Scene to DAYTHEME
            //theme = config.Sky.DAYTHEME;
            // Generate the Background Music Infinitely
            createjs.Sound.play("dayplaysound", { "loop": -1 });
            changeScene();
        };
        // INSTRUCTIONS Button click event handler
        Menu.prototype._instructionsButtonClick = function (event) {
            createjs.Sound.play("buttonpress");
            // Switch to the Instructions Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        // LEVELS Button click event handler
        Menu.prototype._levelsButtonClick = function (event) {
            createjs.Sound.play("buttonpress");
            // Switch to the LEVELS Scene
            scene = config.Scene.PLAY;
            changeScene();
        };
        return Menu;
    })(objects.Scene);
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map