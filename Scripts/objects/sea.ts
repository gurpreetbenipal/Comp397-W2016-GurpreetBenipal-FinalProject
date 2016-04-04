module objects {
    //SEA CLASS ++++++++++++++++++++++++++++++++++++++++++++++
    export class Sea extends objects.GameObject {
      
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super("Sea");
            this._speed.x = 5;           // 5 pixels per frame
            this._reset(0);
        }
        
        // Check to see if the right of the sky
        // has met the right of the scene
        protected _checkBounds(value: number): void {
            if (this.x <= value) {
                this._reset(0);
            }
        }
        
        //Reset the sky offscreen
        protected _reset(value: number): void {
            this.x = value;
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
        public update(): void {
            //Scroll the sky 5 pixels per frame
            this.x -= this._speed.x;
            this._checkBounds(-1340);
        }
    }
}