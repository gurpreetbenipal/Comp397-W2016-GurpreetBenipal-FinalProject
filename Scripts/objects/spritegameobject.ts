module objects {
    /*GAMEOBJECT SUPER CLASS */
    export class SpriteGameObject extends createjs.Sprite {
        //PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++
        protected _speed: createjs.Point;
        protected _leftBounds: number;
        protected _rightBounds: number;
        protected _topBounds: number;
        protected _bottomBounds: number;
       
        //PUBLIC INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++
        public name: string;
        public width: number;
        public height: number;
        public centerX: number;
        public centerY: number;
        public isHit: boolean;
        
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(spriteString: string) {
            super(textureAtlas,spriteString);
            this.isHit = false;
            this._speed = new createjs.Point(0, 0);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;
            this._topBounds = 0;
            this._bottomBounds = config.Screen.HEIGHT - this.height;
            this._leftBounds = -this.width;
            this._rightBounds = config.Screen.WIDTH + this.width;

        }

        protected _checkBounds(value: number): void {
            var resetValue: number = 0;
            //Check if the x value has met the reset criteria
            if (this.x <= value) {
                this._reset(resetValue);
            }
        }
        
        //Reset the Object offscreen
        protected _reset(value: number): void {
            this.x = value;
            this.isHit = false;
        }
        
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++
        public update(): void {
            var boundValue: number = 0; 
            //Scroll the object 5 pixels per frame
            this.x -= this._speed.x;
            this._checkBounds(boundValue);
        }
    }
}