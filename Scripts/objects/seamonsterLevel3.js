var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PLAYER Class  ++++++++++++++++++++++++++++++++++++
    var SeaMonsterLevel3 = (function (_super) {
        __extends(SeaMonsterLevel3, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function SeaMonsterLevel3() {
            _super.call(this, assets.getResult("SeaMonster1Level3"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
            this.x = 600;
            this.y = 0;
            this._movement = 3;
        }
        //PRIVATE METHODS
        SeaMonsterLevel3.prototype._checkBounds = function () {
            if (this.y < this._topBounds) {
                this._movement = 3;
            }
            if (this.y > this._bottomBounds) {
                this._movement = -3;
            }
        };
        //PUBLIC METHODS
        SeaMonsterLevel3.prototype.update = function () {
            this.y += this._movement;
            this._checkBounds();
        };
        return SeaMonsterLevel3;
    })(createjs.Bitmap);
    objects.SeaMonsterLevel3 = SeaMonsterLevel3;
})(objects || (objects = {}));
//# sourceMappingURL=seamonsterLevel3.js.map