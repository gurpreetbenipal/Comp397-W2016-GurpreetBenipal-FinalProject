module objects {
    //BULLET CLASS +++++++++++++++++++++++++++++++++++++
    export class BulletFish extends createjs.Sprite {
        
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++
        private _topBounds: number;
        private _bottomBounds: number;
        
        //PUBLIC INSTANCE VARIABLES ++++++++++++++++++++
        public width: number;
        public height: number;
        public centerX: number;
        public centerY: number;
        public isHit: boolean;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(player: objects.Player) {
            super(textureAtlas, "Bullet");
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.centerX = this.width * 0.5;
            this.centerY = this.height * 0.5;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this._topBounds = this.height * 0.5;
            this._bottomBounds = config.Screen.HEIGHT - (this.height * 0.5);

            this.isHit = false;
        }
        
        //PRIVATE METHODS
        private _checkBounds(): void {
            if (this.x >= config.Screen.WIDTH) {
                this.x = 71;
                fired = false;
                this.isHit = false;
                this.visible = false;
            }
        }
        
        //PUBLIC METHODS
        public update(): void {
            this.visible = true;
            this.x += 7;
            this._checkBounds();
        }
    }
}