module objects {
    
    // PLAYER Class  ++++++++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++
        private _topBounds: number;
        private _bottomBounds: number;
       // private _fishNumber : number;
        
        //PUBLIC INSTANCE VARIABLES ++++++++++++++++++++
        public width: number;
        public height: number;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor() {
            super(assets.getResult("Fish"));
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
        private _checkBounds(): void {
            if (this.y < this._topBounds) {
                this.y = this._topBounds;
            }
            if (this.y > this._bottomBounds) {
                this.y = this._bottomBounds;
            }
        }
        
        //PUBLIC METHODS
        public update(): void {
            //this.image = (this._fishNumber==1)?assets.getResult("Fish"):assets.getResult("Fish1");
            this.y = stage.mouseY;
            this._checkBounds();
            //this._fishNumber= (this._fishNumber==1)?2:1;
        }
    }
}