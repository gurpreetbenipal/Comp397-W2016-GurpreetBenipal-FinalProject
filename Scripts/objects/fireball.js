var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //Fireball CLASS +++++++++++++++++++++++++++++++++++++
    var Fireball = (function (_super) {
        __extends(Fireball, _super);
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Fireball(bitmapstring, seamonster) {
            _super.call(this, bitmapstring);
            this._seamonster = seamonster;
            this._reset(this._rightBounds - 250);
            this.name = "fireball";
            this.isHit = false; // If fireball collides with the player, then isHit = true
        }
        // Check to see if the top of the fireball
        // has outside the viewport
        Fireball.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(this._rightBounds - 250); // 200 is the width of the Monster
            }
        };
        //Reset the fireball offscreen
        Fireball.prototype._reset = function (value) {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this._speed.x = (this._speed.x == 5) ? 7 : this._speed.x;
            this._speed.y = Math.floor(Math.random() * 4) - 2;
            this.x = value;
            //this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
            this.y = this._seamonster.y - 35;
            this.isHit = false;
        };
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        Fireball.prototype.update = function () {
            //Scroll the fireball 5 pixels per frame
            this.x -= this._speed.x;
            //this.y -= this._speed.y;
            this._checkBounds(this._leftBounds - this.width);
        };
        return Fireball;
    })(objects.GameObject);
    objects.Fireball = Fireball;
})(objects || (objects = {}));
//# sourceMappingURL=fireball.js.map