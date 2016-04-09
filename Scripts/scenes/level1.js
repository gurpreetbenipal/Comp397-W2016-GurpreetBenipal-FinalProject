var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// LEVEL1 SCENE
var scenes;
(function (scenes) {
    // LEVEL1 CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Level1 = (function (_super) {
        __extends(Level1, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++
        function Level1() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++
        // Start Method
        Level1.prototype.start = function () {
            //Set the SeaMonster Count
            this._seamonsterCount = 3;
            //Instantiate SeaMonster Array
            this._seamonsters = new Array();
            // added Sea to the scene
            this._sea = new objects.Sea("Sea");
            this.addChild(this._sea);
            //Add TITLE Label
            this._titleLabel = new objects.Label("LEVEL 1", "bold 24px Cambiria", "#0033cc", config.Screen.CENTER_X, 30, true);
            this.addChild(this._titleLabel);
            // added Item to the scene
            this._item = new objects.Item("Coin");
            this.addChild(this._item);
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // added SeaMonsters to the scene
            for (var seamonster = 0; seamonster < this._seamonsterCount; seamonster++) {
                this._seamonsters[seamonster] = new objects.SeaMonster("SeaMonster1");
                this.addChild(this._seamonsters[seamonster]);
            }
            // add the Score Board to the Game Over Scene
            // this.addChild(play.scoreboard);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // Level1 Scene updates here
        Level1.prototype.update = function () {
            this._sea.update();
            this._player.update();
            this._item.update();
            this._seamonsters.forEach(function (seamonster) {
                seamonster.update();
            });
        };
        return Level1;
    })(objects.Scene);
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1.js.map