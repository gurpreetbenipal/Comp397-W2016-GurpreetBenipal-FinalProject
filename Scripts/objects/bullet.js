var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //BULLET CLASS +++++++++++++++++++++++++++++++++++++
    var BulletFish = (function (_super) {
        __extends(BulletFish, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function BulletFish(player) {
            _super.call(this, textureAtlas, "Bullet");
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
            this.isHit = false;
        }
        //PRIVATE METHODS
        BulletFish.prototype._checkBounds = function () {
            if (this.x >= config.Screen.WIDTH) {
                this.x = 71;
                fired = false;
                this.isHit = false;
                this.visible = false;
            }
        };
        //PUBLIC METHODS
        BulletFish.prototype.update = function () {
            this.visible = true;
            this.x += 7;
            this._checkBounds();
        };
        return BulletFish;
    })(createjs.Sprite);
    objects.BulletFish = BulletFish;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map