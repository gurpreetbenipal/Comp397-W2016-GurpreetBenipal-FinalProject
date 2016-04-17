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
            _super.call(this, assets.getResult("Bullet"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
            this.isHit = false;
            //this.x = 64;
            //this._fishNumber=1;
        }
        //PRIVATE METHODS
        BulletFish.prototype._checkBounds = function () {
            if (this.x >= config.Screen.WIDTH) {
                //this.x= this._player.x;
                this.x = 71;
                fired = false;
                this.isHit = false;
                this.image = assets.getResult("");
            }
        };
        //PUBLIC METHODS
        BulletFish.prototype.update = function () {
            this.image = assets.getResult("Bullet");
            this.x += 7;
            this._checkBounds();
        };
        return BulletFish;
    })(createjs.Bitmap);
    objects.BulletFish = BulletFish;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map