var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEVEL2 SCENE
var scenes;
(function (scenes) {
    // LEVEL2 CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Level2 = (function (_super) {
        __extends(Level2, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++
        function Level2() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++
        // Start Method
        Level2.prototype.start = function () {
            // added Sea to the scene
            this._sea = new objects.Sea("Level2Sea");
            this.addChild(this._sea);
            //Add TITLE Label
            this._titleLabel = new objects.Label("LEVEL 2", "bold 24px Cambiria", "#0033cc", config.Screen.CENTER_X, 30, true);
            this.addChild(this._titleLabel);
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // add the Score Board to the Game Over Scene
            // this.addChild(play.scoreboard);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // LEVEL2 Scene updates here
        Level2.prototype.update = function () {
            this._sea.update();
            this._player.update();
        };
        return Level2;
    })(objects.Scene);
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map