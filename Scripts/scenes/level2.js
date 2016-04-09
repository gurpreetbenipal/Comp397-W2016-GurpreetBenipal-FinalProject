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
            //Set the SeaMonster Count
            this._seamonsterCount = 4;
            //Instantiate SeaMonster Array
            this._seamonsters = new Array();
            // added Sea to the scene
            this._sea = new objects.Sea("Sea");
            this.addChild(this._sea);
            //Add TITLE Label2
            this._titleLabel = new objects.Label("LEVEL 2", "bold 24px Cambiria", "#0033cc", config.Screen.CENTER_X, 30, true);
            this.addChild(this._titleLabel);
            // added Item to the scene
            this._item = new objects.Item("Coin");
            this.addChild(this._item);
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            // added SeaMonsters to the scene
            for (var seamonster = 0; seamonster < this._seamonsterCount; seamonster++) {
                this._seamonsters[seamonster] = new objects.SeaMonsterLevel2("SeaMonster1Level2");
                this.addChild(this._seamonsters[seamonster]);
            }
            // add the Score Board to the Game Over Scene
            // this.addChild(play.scoreboard);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // Level2 Scene updates here
        Level2.prototype.update = function () {
            this._sea.update();
            this._player.update();
            this._item.update();
            this._seamonsters.forEach(function (seamonster) {
                seamonster.update();
            });
        };
        return Level2;
    })(objects.Scene);
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map