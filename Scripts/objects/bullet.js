var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //SeaMonsterLevel2 CLASS +++++++++++++++++++++++++++++++++++++
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Bullet(player) {
            _super.call(this, assets.getResult("Bullet"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
            //this.x = 64;
            //this._fishNumber=1;
        }
        //PRIVATE METHODS
        Bullet.prototype._checkBounds = function () {
            /* if (this.y < this._topBounds) {
                 this.y = this._topBounds;
             }
             if (this.y > this._bottomBounds) {
                 this.y = this._bottomBounds;
             }*/
            if (this.x >= config.Screen.WIDTH) {
                //this.x= this._player.x;
                this.x = 71;
                fired = false;
                this.image = assets.getResult("");
            }
        };
        //PUBLIC METHODS
        Bullet.prototype.update = function () {
            this.image = assets.getResult("Bullet");
            this.x += 7;
            //this.y = this._player.y + this._player.height *0.5;
            this._checkBounds();
        };
        return Bullet;
    })(createjs.Bitmap);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map