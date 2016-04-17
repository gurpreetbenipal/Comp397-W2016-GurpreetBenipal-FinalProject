module objects {
    //Fireball CLASS +++++++++++++++++++++++++++++++++++++
    export class Fireball extends objects.GameObject {
        //PRIVATE INSTANCE Variables
        private _seamonster: objects.SeaMonsterLevel3;
        
        
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(bitmapstring:string,seamonster:objects.SeaMonsterLevel3) {
            super(bitmapstring);
            this._seamonster = seamonster;
            this._reset(this._rightBounds - 250);
            this.name = "fireball";
            this.isHit = false;                 // If fireball collides with the player, then isHit = true
            
            
        }
        
        // Check to see if the top of the fireball
        // has outside the viewport
        protected _checkBounds(value: number): void {
            if (this.x <= value) {
                this._reset(this._rightBounds - 250);             // 200 is the width of the Monster
            }
        }
        
        //Reset the fireball offscreen
        protected _reset(value: number): void {
            this._speed.x = Math.floor(Math.random() * 5) + 5;
            this._speed.x = (this._speed.x==5)?7:this._speed.x;
            this._speed.y = Math.floor(Math.random() * 4) - 2;

            this.x = value;
            //this.y = Math.floor(Math.random() * this._bottomBounds) + this._topBounds;
            this.y = this._seamonster.y - 35;
            this.isHit = false;
        }
        
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        public update(): void {
            //Scroll the fireball 5 pixels per frame
            this.x -= this._speed.x;
            //this.y -= this._speed.y;
            this._checkBounds(this._leftBounds - this.width);
        }
    }
}