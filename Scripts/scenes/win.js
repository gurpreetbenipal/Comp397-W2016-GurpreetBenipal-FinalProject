var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// END SCENE
var scenes;
(function (scenes) {
    // END CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Win = (function (_super) {
        __extends(Win, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++
        function Win() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++
        // Start Method
        Win.prototype.start = function () {
            // Stop the Previous Background Music
            createjs.Sound.stop();
            // Generate the Background Music Infinitely
            createjs.Sound.play("SeaWavesSound", { "loop": -1 });
            // added Sea to the scene
            this._sea = new objects.Sea("CommonBackground");
            this.addChild(this._sea);
            //Add TITLE Label
            this._gamewinLabel = new createjs.Bitmap(assets.getResult("CongratsMessage"));
            this._gamewinLabel.x = 0;
            this._gamewinLabel.y = 90;
            this.addChild(this._gamewinLabel);
            // add the PLAY AGAIN button to the WIN scene
            this._playAgainButton = new objects.Button("PlayAgainButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 120, true);
            this.addChild(this._playAgainButton);
            this.addChild(level3.scoreboard);
            // PLAY AGAIN Button event listener
            this._playAgainButton.on("click", this._playAgainButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // END Scene updates here
        Win.prototype.update = function () {
            this._sea.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PLAY_AGAIN Button click event handler
        Win.prototype._playAgainButtonClick = function (event) {
            //Generate Button Press Sound
            createjs.Sound.play("buttonpress");
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return Win;
    })(objects.Scene);
    scenes.Win = Win;
})(scenes || (scenes = {}));
//# sourceMappingURL=win.js.map