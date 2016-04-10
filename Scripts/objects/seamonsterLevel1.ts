module objects {
    //SeaMonsterLevel1 CLASS +++++++++++++++++++++++++++++++++++++
    export class SeaMonsterLevel1 extends objects.GameObject {
        
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(bitmapstring:string) {
            super(bitmapstring);
            this._speed.x = 5;           // Seamonster Speed
            this._reset(this._rightBounds);
            this.name = "seamonster";
            this.isHit = false;                 // If seamonster collides with the player, then isHit = true
        }
        
        // Check to see if the top of the seamonster
        // has outside the viewport
        protected _checkBounds(value: number): void {
            if (this.x <= value) {
                this._reset(this._rightBounds);
            }
        }
        
        //Reset the seamonster offscreen
        protected _reset(value: number): void {
            var randomNumber: number = Math.floor(Math.random() * 6 + 1);
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
            //this._speed.x = Math.floor(Math.random() * 5) + 5;
            //this._speed.y = Math.floor(Math.random() * 4) - 2;

            this.x = value;
            this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
            this.isHit = false;
        }
        
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        public update(): void {
            //Scroll the Seamonster 5 pixels per frame
            this.x -= this._speed.x;
            //this.y -= this._speed.y;
            this._checkBounds(this._leftBounds - this.width);
        }
    }
}