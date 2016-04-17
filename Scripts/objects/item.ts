module objects {
    //ITEM CLASS +++++++++++++++++++++++++++++++++++++++++++++
    
    export class Item extends objects.GameObject {
        
        //PRIVATE INSTANCE VARIABLES++++++++++++++++++++++++++
        private _currentLevel:string;
        
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(spriteString:string,currentLevel:string) {
            super(spriteString);
            this._speed.x = 5;           // Item Speed
            this._reset(this._rightBounds);
            this.name = "item";
            this._currentLevel=currentLevel;
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
            var randomNumber: number = Math.floor(Math.random() * 5 )+ 1;
            if(this._currentLevel == "level1")
            {
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
            else if(this._currentLevel == "level2")
            {
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
            else if(this._currentLevel == "level3")
            {
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