var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// END SCENE
var scenes;
(function (scenes) {
    // END CLASS ++++++++++++++++++++++++++++++++++++++++++
    var End = (function (_super) {
        __extends(End, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++
        function End() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++
        // Start Method
        End.prototype.start = function () {
            // Stop the Previous Background Music
            createjs.Sound.stop();
            // Generate the Background Music Infinitely
            createjs.Sound.play("SeaWavesSound", { "loop": -1 });
            // added Sea to the scene
            this._sea = new objects.Sea("CommonBackground");
            this.addChild(this._sea);
            //Add GAME OVER Label
            this._gameoverLabel = new createjs.Bitmap(assets.getResult("GameOver"));
            this._gameoverLabel.x = 100;
            this._gameoverLabel.y = config.Screen.CENTER_Y - 120;
            this.addChild(this._gameoverLabel);
            // add the PLAY AGAIN button to the OVER scene
            this._playAgainButton = new objects.Button("PlayAgainButton", config.Screen.CENTER_X, config.Screen.CENTER_Y + 100, true);
            this.addChild(this._playAgainButton);
            // PLAY AGAIN Button event listener
            this._playAgainButton.on("click", this._playAgainButtonClick, this);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // END Scene updates here
        End.prototype.update = function () {
            this._sea.update();
        };
        //EVENT HANDLERS ++++++++++++++++++++
        // PLAY_AGAIN Button click event handler
        End.prototype._playAgainButtonClick = function (event) {
            //Generate Button Press Sound
            createjs.Sound.play("buttonpress");
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        };
        return End;
    })(objects.Scene);
    scenes.End = End;
})(scenes || (scenes = {}));
//# sourceMappingURL=end.js.map