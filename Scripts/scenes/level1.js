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
            // Stop the Previous Background Music
            createjs.Sound.stop();
            // Generate the Background Music Infinitely
            createjs.Sound.play("Level1Sound", { "loop": -1 });
            //Set the SeaMonster Count
            this._seamonsterCount = 2;
            //Instantiate SeaMonster Array
            this._seamonsters = new Array();
            // added Sea to the scene
            this._sea = new objects.Sea("Level1Sea");
            this.addChild(this._sea);
            //Add TITLE Label
            this._titleLabel = new objects.Label("LEVEL 1", "bold 26px CONSOLAS", "#0033cc", config.Screen.CENTER_X, 30, true);
            this.addChild(this._titleLabel);
            // added Item to the scene
            this._item = new objects.Item("Coin", "level1");
            this.addChild(this._item);
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //added Explosion to the scene
            this.explosion = new objects.Explosion();
            this.addChild(this.explosion);
            // added SeaMonsters to the scene
            for (var seamonster = 0; seamonster < this._seamonsterCount; seamonster++) {
                this._seamonsters[seamonster] = new objects.SeaMonsterLevel1("SeaMonster1Level1");
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
        // Level1 Scene updates here
        Level1.prototype.update = function () {
            var _this = this;
            this._sea.update();
            this._player.update();
            this._item.update();
            this._seamonsters.forEach(function (seamonster) {
                seamonster.update();
                // Check the Collision with SEAMONSTER
                _this._collision.checkForLevel1(seamonster);
            });
            // Check the Collision with ITEM
            this._collision.checkForLevel1(this._item);
        };
        return Level1;
    })(objects.Scene);
    scenes.Level1 = Level1;
})(scenes || (scenes = {}));
//# sourceMappingURL=level1.js.map