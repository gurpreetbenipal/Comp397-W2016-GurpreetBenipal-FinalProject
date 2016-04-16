var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    // PLAYER Class  ++++++++++++++++++++++++++++++++++++
    var Player = (function (_super) {
        __extends(Player, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Player() {
            _super.call(this, assets.getResult("Fish"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);
            this.x = 64;
            //this._fishNumber=1;
        }
        //PRIVATE METHODS
        Player.prototype._checkBounds = function () {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        };
        //PUBLIC METHODS
        Player.prototype.update = function () {
            //this.image = (this._fishNumber==1)?assets.getResult("Fish"):assets.getResult("Fish1");
            this.y = stage.mouseY;
            this._checkBounds();
            //this._fishNumber= (this._fishNumber==1)?2:1;
        };
        return Player;
    })(createjs.Bitmap);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map