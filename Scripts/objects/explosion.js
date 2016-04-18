var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // EXPLOSION Class  ++++++++++++++++++++++++++++++++++++
    var Explosion = (function (_super) {
        __extends(Explosion, _super);
        function Explosion() {
            _super.call(this, textureAtlas, "FishDestroy");
            this.reset(0);
        }
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++++
        // Update the Explosion
        Explosion.prototype.update = function (player_Y) {
            this.visible = true;
            this.x = 10;
            this.y = player_Y; // Y coordinate of the explosion will be same as the Player's Y coordinate
        };
        Explosion.prototype.reset = function (player_Y) {
            this.x = 10;
            this.y = player_Y;
            this.visible = false; // Hides the Explosion Image
        };
        return Explosion;
    })(createjs.Sprite);
    objects.Explosion = Explosion;
})(objects || (objects = {}));
//# sourceMappingURL=explosion.js.map