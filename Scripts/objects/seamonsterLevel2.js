var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //SeaMonsterLevel2 CLASS +++++++++++++++++++++++++++++++++++++
    var SeaMonsterLevel2 = (function (_super) {
        __extends(SeaMonsterLevel2, _super);
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function SeaMonsterLevel2(bitmapstring) {
            _super.call(this, bitmapstring);
            this._reset(this._rightBounds);
            this.name = "seamonsterlevel2";
            this.isHit = false; // If seamonster collides with the player, then isHit = true
        }
        // Check to see if the top of the seamonster
        // has outside the viewport
        SeaMonsterLevel2.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        //Reset the seamonster offscreen
        SeaMonsterLevel2.prototype._reset = function (value) {
            var randomNumber = Math.floor(Math.random() * 6 + 1);
            switch (randomNumber) {
                case 1:
                    this.image = assets.getResult("SeaMonster1Level2");
                    break;
                case 2:
                    this.image = assets.getResult("SeaMonster2Level2");
                    break;
                case 3:
                    this.image = assets.getResult("SeaMonster3Level2");
                    break;
                case 4:
                    this.image = assets.getResult("SeaMonster4Level2");
                    break;
                case 5:
                    this.image = assets.getResult("SeaMonster5Level2");
                    break;
                case 6:
                    this.image = assets.getResult("SeaMonster6Level2");
                    break;
                default:
                    break;
            }
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this._speed.x = (this._speed.x == 5) ? 7 : this._speed.x;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
            this.isHit = false;
        };
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        SeaMonsterLevel2.prototype.update = function () {
            //Scroll the Seamonster 5 pixels per frame
            this.x -= this._speed.x;
            this.y -= this._speed.y;
            this._checkBounds(this._leftBounds - this.width);
        };
        return SeaMonsterLevel2;
    })(objects.GameObject);
    objects.SeaMonsterLevel2 = SeaMonsterLevel2;
})(objects || (objects = {}));
//# sourceMappingURL=seamonsterLevel2.js.map