module objects {
    
    // PLAYER Class  ++++++++++++++++++++++++++++++++++++
    export class Player extends createjs.Bitmap {
        
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++
        private _topBounds: number;
        private _bottomBounds: number;
        
        //PUBLIC INSTANCE VARIABLES ++++++++++++++++++++
        public width: number;
        public height: number;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor() {
            super(assets.getResult("aladdin"));
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);

            this.x = 64;
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
            this.y = stage.mouseY;
            this._checkBounds();
        }
    }
}