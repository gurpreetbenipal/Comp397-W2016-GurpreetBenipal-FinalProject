module objects {
    //ITEM CLASS +++++++++++++++++++++++++++++++++++++++++++++
    
    export class Item extends objects.GameObject {
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(bitmapString:string) {
            super(bitmapString);
            this._speed.x = 5;           // Item Speed
            this._reset(this._rightBounds);
            this.name = "item";
        }
        
        // Check to see if the top of the item
        // has outside the viewport
        protected _checkBounds(value: number): void {
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        }
        
        //Reset the item offscreen
        protected _reset(value: number): void {
            var randomNumber: number = Math.floor(Math.random() * 4 + 1);
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
            
            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;

        }
        
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        public update(): void {
            //Scroll the item 5 pixels per frame
            this.x -= this._speed.x;
            this._checkBounds(this._leftBounds);
        }
    }
}