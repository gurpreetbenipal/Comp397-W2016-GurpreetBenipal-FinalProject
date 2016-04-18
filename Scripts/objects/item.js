var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //ITEM CLASS +++++++++++++++++++++++++++++++++++++++++++++
    var Item = (function (_super) {
        __extends(Item, _super);
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Item(spriteString, currentLevel) {
            _super.call(this, spriteString);
            this._speed.x = 5; // Item Speed
            this._reset(this._rightBounds);
            this.name = "item";
            this._currentLevel = currentLevel;
        }
        // Check to see if the top of the item
        // has outside the viewport
        Item.prototype._checkBounds = function (value) {
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        };
        //Reset the item offscreen
        Item.prototype._reset = function (value) {
            var randomNumber = Math.floor(Math.random() * 5) + 1;
            //Pick random Item for Level1
            if (this._currentLevel == "level1") {
                switch (randomNumber) {
                    case 1:
                        this.image = assets.getResult("Coin");
                        break;
                    case 2:
                        this.image = assets.getResult("Coins");
                        break;
                    case 3:
                        this.image = assets.getResult("CoinStack");
                        break;
                    case 4:
                        this.image = assets.getResult("MoneyBag");
                        break;
                    case 5:
                        this.image = assets.getResult("Star");
                        break;
                    default:
                        break;
                }
            }
            else if (this._currentLevel == "level2") {
                switch (randomNumber) {
                    case 1:
                        this.image = assets.getResult("Stars");
                        break;
                    case 2:
                        this.image = assets.getResult("Crown");
                        break;
                    case 3:
                        this.image = assets.getResult("GoldPot");
                        break;
                    case 4:
                        this.image = assets.getResult("Eagle");
                        break;
                    case 5:
                        this.image = assets.getResult("Heart");
                        break;
                    default:
                        break;
                }
            }
            else if (this._currentLevel == "level3") {
                switch (randomNumber) {
                    case 1:
                        this.image = assets.getResult("Shell");
                        break;
                    case 2:
                        this.image = assets.getResult("DiamondHeart");
                        break;
                    case 3:
                        this.image = assets.getResult("Ring");
                        break;
                    case 4:
                        this.image = assets.getResult("GoldTreasure");
                        break;
                    case 5:
                        this.image = assets.getResult("Star");
                        break;
                    default:
                        break;
                }
            }
            //Set the X and Y coordinates of Item
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
        };
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        Item.prototype.update = function () {
            //Scroll the item 5 pixels per frame
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds);
        };
        return Item;
    })(objects.GameObject);
    objects.Item = Item;
})(objects || (objects = {}));
//# sourceMappingURL=item.js.map