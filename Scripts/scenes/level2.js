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
            // Stop the Previous Background Music
            createjs.Sound.stop();
            // Generate the Background Music Infinitely
            createjs.Sound.play("Level2Sound", { "loop": -1 });
            //Set the SeaMonster Count
            this._seamonsterCount = 4;
            //Instantiate SeaMonster Array
            this._seamonsters = new Array();
            // added Sea to the scene
            this._sea = new objects.Sea("Level2Sea");
            this.addChild(this._sea);
            //Add TITLE Label2
            this._titleLabel = new objects.Label("LEVEL 2", "bold 24px Cambiria", "#0033cc", config.Screen.CENTER_X, 30, true);
            this.addChild(this._titleLabel);
            // added Item to the scene
            this._item = new objects.Item("Coin", "level2");
            this.addChild(this._item);
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //added Explosion to the scene
            this.explosion = new objects.Explosion();
            this.addChild(this.explosion);
            // added SeaMonsters to the scene
            for (var seamonster = 0; seamonster < this._seamonsterCount; seamonster++) {
                this._seamonsters[seamonster] = new objects.SeaMonsterLevel2("SeaMonster1Level2");
                this.addChild(this._seamonsters[seamonster]);
            }
            //added ScoreSystem to the scene
            this.scoreboard = new objects.ScoreSystem();
            this.addChild(this.scoreboard);
            // added Collision Manager to the scene
            this._collision = new managers.Collision(this._player);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // Level2 Scene updates here
        Level2.prototype.update = function () {
            var _this = this;
            this._sea.update();
            this._player.update();
            this._item.update();
            this._seamonsters.forEach(function (seamonster) {
                seamonster.update();
                // Check the Collision with SEAMONSTER
                _this._collision.checkForLevel2(seamonster);
            });
            // Check the Collision with ITEM
            this._collision.checkForLevel2(this._item);
        };
        return Level2;
    })(objects.Scene);
    scenes.Level2 = Level2;
})(scenes || (scenes = {}));
//# sourceMappingURL=level2.js.map