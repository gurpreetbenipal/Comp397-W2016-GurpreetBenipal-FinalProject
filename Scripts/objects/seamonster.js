var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var SeaMonster = (function (_super) {
        __extends(SeaMonster, _super);
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function SeaMonster(bitmapstring) {
            _super.call(this, bitmapstring);
            this._reset(this._rightBounds);
            this.name = "seamonster";
            this.isHit = false; // If seamonster collides with the player, then isHit = true
        }
        // Check to see if the top of the seamonster
        // has outside the viewport
        SeaMonster.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        //Reset the seamonster offscreen
        SeaMonster.prototype._reset = function (value) {
            var randomNumber = Math.floor(Math.random() * 4 + 1);
            switch (randomNumber) {
                case 1:
                    this.image = assets.getResult("SeaMonster1");
                    break;
                case 2:
                    this.image = assets.getResult("SeaMonster2");
                    break;
                case 3:
                    this.image = assets.getResult("SeaMonster3");
                    break;
                case 4:
                    this.image = assets.getResult("SeaMonster4");
                    break;
                default:
                    break;
            }
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
            this.isHit = false;
        };
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        SeaMonster.prototype.update = function () {
            //Scroll the Seamonster 5 pixels per frame
            this.x -= this._speed.x;
            this.y -= this._speed.y;
            this._checkBounds(this._leftBounds);
        };
        return SeaMonster;
    })(objects.GameObject);
    objects.SeaMonster = SeaMonster;
})(objects || (objects = {}));
//# sourceMappingURL=seamonster.js.map