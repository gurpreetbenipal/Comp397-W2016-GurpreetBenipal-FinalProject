module objects {
    
    // PLAYER Class  ++++++++++++++++++++++++++++++++++++
    export class SeaMonsterLevel3 extends createjs.Bitmap {
        
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++
        private _topBounds: number;
        private _bottomBounds: number;
        private _movement: number;
      
        
        //PUBLIC INSTANCE VARIABLES ++++++++++++++++++++
        public width: number;
        public height: number;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor() {
            super(assets.getResult("SeaMonster1Level3"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);

            this.x = 600;
            this.y = 0;
            this._movement=3;
           
        }
        
        //PRIVATE METHODS
        private _checkBounds(): void {
            if (this.y < this._topBounds) {
                this._movement=3;
            }
            if (this.y > this._bottomBounds) {
                this._movement=-3;
            }
        }
        
        //PUBLIC METHODS
        public update(): void {
            this.y += this._movement;
            this._checkBounds();
          
        }
    }
}