// LEVEL3 SCENE
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var fired = false;
var scenes;
(function (scenes) {
    // LEVEL3 CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Level3 = (function (_super) {
        __extends(Level3, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++
        function Level3() {
            _super.call(this);
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++
        // Start Method
        Level3.prototype.start = function () {
            // Stop the Previous Background Music
            createjs.Sound.stop();
            // Generate the Background Music Infinitely
            createjs.Sound.play("Level3Sound", { "loop": -1 });
            //Set the Fireballs Count
            this._fireballsCount = 6;
            //Instantiate Fireballs Array
            this._fireballs = new Array();
            // added Sky to the scene
            this._sea = new objects.Sea("Level3Sea");
            this.addChild(this._sea);
            //Add TITLE Label
            this._titleLabel = new createjs.Sprite(textureAtlas, "Level3Label");
            this._titleLabel.x = config.Screen.CENTER_X - 80;
            this._titleLabel.y = 0;
            this.addChild(this._titleLabel);
            // added Item to the scene
            this._item = new objects.Item("Shell", "level3");
            this.addChild(this._item);
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            //added Explosion to the scene
            this.explosion = new objects.Explosion();
            this.addChild(this.explosion);
            // added SeaMonster to the scene
            this._seamonster = new objects.SeaMonsterLevel3();
            this.addChild(this._seamonster);
            //added ScoreSystem to the scene
            this.scoreboard = new objects.ScoreSystem();
            this.addChild(this.scoreboard);
            this.scoreboard.addEnemyHealthLabel();
            // added Collision Manager to the scene
            this._collision = new managers.Collision(this._player);
            //Add the Key Press event listener to the scene
            window.onkeydown = this._keyPressed;
            // added Bullet to the scene
            this._bullet = new objects.BulletFish(this._player);
            this.addChild(this._bullet);
            // added Fireballs to the scene
            for (var fireball = 0; fireball < this._fireballsCount; fireball++) {
                this._fireballs[fireball] = new objects.Fireball("Fireball", this._seamonster);
                this.addChild(this._fireballs[fireball]);
            }
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // LEVEL3 Scene updates here
        Level3.prototype.update = function () {
            var _this = this;
            this._sea.update();
            this._player.update();
            this._item.update();
            this._seamonster.update();
            // Check the Collision with ITEM
            this._collision.checkForLevel3(this._item);
            this._fireballs.forEach(function (fireball) {
                fireball.update();
                // Check the Collision with Player
                _this._collision.checkForLevel3(fireball);
            });
            if (fired == true) {
                this._bullet.update();
                // Check the Collision with Bullet
                this._collision.checkForBulletCollision(this._bullet, this._seamonster);
            }
        };
        //EVENT HANDLERS ++++++++++++++++++++
        //Key Pressed Event Handler
        Level3.prototype._keyPressed = function (event) {
            switch (event.keyCode) {
                case config.KEY.SPACE:
                    fired = true; //Set the Bullet fired true whne SPACEBAR is pressed                               
                    level3._bullet.visible = true;
                    createjs.Sound.play("BulletSound");
                    //Set the X and Y position of bullet
                    level3._bullet.x = 71;
                    level3._bullet.y = level3._player.y + level3._player.height * 0.5;
                    break;
            }
        };
        return Level3;
    })(objects.Scene);
    scenes.Level3 = Level3;
})(scenes || (scenes = {}));
//# sourceMappingURL=level3.js.map