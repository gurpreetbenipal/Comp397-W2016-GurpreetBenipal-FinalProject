module objects {
    //SeaMonsterLevel2 CLASS +++++++++++++++++++++++++++++++++++++
    export class Bullet extends createjs.Bitmap {
        
       //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++
        private _topBounds: number;
        private _bottomBounds: number;
        
        //PUBLIC INSTANCE VARIABLES ++++++++++++++++++++
        public width: number;
        public height: number;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(player:objects.Player) {
            super(assets.getResult("Bullet"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);

          
            
            //this.x = 64;
            //this._fishNumber=1;
        }
        
        //PRIVATE METHODS
        private _checkBounds(): void {
           /* if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }*/
            
            if(this.x >= config.Screen.WIDTH)
            {
                //this.x= this._player.x;
                this.x =71;
                fired = false;
                this.image = assets.getResult("");
            }
        }
        
        //PUBLIC METHODS
        public update(): void {
            this.image = assets.getResult("Bullet");
            this.x +=7;
            //this.y = this._player.y + this._player.height *0.5;
            this._checkBounds();     
        }
    }
}