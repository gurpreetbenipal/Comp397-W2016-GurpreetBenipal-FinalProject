module objects {
    // EXPLOSION Class  ++++++++++++++++++++++++++++++++++++
    export class Explosion extends createjs.Sprite {

        constructor() {
            super(textureAtlas, "FishDestroy");
            this.reset(0);
        }   
        
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++++
        
        // Update the Explosion
        public update(player_Y: number): void {
            this.visible = true;
            this.x = 10;
            this.y = player_Y;                          // Y coordinate of the explosion will be same as the Player's Y coordinate
        }

        public reset(player_Y: number): void {
            this.x = 10;
            this.y = player_Y;
            this.visible = false;          // Hides the Explosion Image
        }
    }
}
