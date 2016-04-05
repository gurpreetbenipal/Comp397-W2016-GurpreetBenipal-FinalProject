var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //SEA CLASS ++++++++++++++++++++++++++++++++++++++++++++++
    var Sea = (function (_super) {
        __extends(Sea, _super);
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Sea(bitmapString) {
            _super.call(this, bitmapString);
            this._speed.x = 5; // 5 pixels per frame
            this._reset(0);
        }
        // Check to see if the right of the sky
        // has met the right of the scene
        Sea.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(0);
            }
        };
        //Reset the sky offscreen
        Sea.prototype._reset = function (value) {
            this.x = value;
        };
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        Sea.prototype.update = function () {
            //Scroll the sky 5 pixels per frame
            this.x -= this._speed.x;
            this._checkBounds(-1280);
        };
        return Sea;
    })(objects.GameObject);
    objects.Sea = Sea;
})(objects || (objects = {}));
//# sourceMappingURL=sea.js.map