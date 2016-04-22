var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //SeaMonsterLevel1 CLASS +++++++++++++++++++++++++++++++++++++
    var SeaMonsterLevel1 = (function (_super) {
        __extends(SeaMonsterLevel1, _super);
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function SeaMonsterLevel1(bitmapstring) {
            _super.call(this, bitmapstring);
            this._speed.x = 5; // Seamonster Speed
            this._reset(this._rightBounds);
            this.name = "seamonster";
            this.isHit = false; // If seamonster collides with the player, then isHit = true
        }
        // Check to see if the top of the seamonster
        // has outside the viewport
        SeaMonsterLevel1.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        //Reset the seamonster offscreen
        SeaMonsterLevel1.prototype._reset = function (value) {
            var randomNumber = Math.floor(Math.random() * 6 + 1);
            switch (randomNumber) {
                case 1:
                    this.image = assets.getResult("SeaMonster1Level1");
                    break;
                case 2:
                    this.image = assets.getResult("SeaMonster2Level1");
                    break;
                case 3:
                    this.image = assets.getResult("SeaMonster3Level1");
                    break;
                case 4:
                    this.image = assets.getResult("SeaMonster4Level1");
                    break;
                case 5:
                    this.image = assets.getResult("SeaMonster5Level1");
                    break;
                case 6:
                    this.image = assets.getResult("SeaMonster6Level1");
                    break;
                default:
                    break;
            }
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
            this.isHit = false;
        };
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        SeaMonsterLevel1.prototype.update = function () {
            //Scroll the Seamonster 5 pixels per frame
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds - this.width);
        };
        return SeaMonsterLevel1;
    })(objects.GameObject);
    objects.SeaMonsterLevel1 = SeaMonsterLevel1;
})(objects || (objects = {}));
//# sourceMappingURL=seamonsterLevel1.js.map