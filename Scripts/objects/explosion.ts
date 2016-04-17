module objects {
    // EXPLOSION Class  ++++++++++++++++++++++++++++++++++++
    export class Explosion extends createjs.Sprite {

        constructor() {
            super(textureAtlas,"FishDestroy");
            this.reset(0);
        }   
        
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++++
        
        // Update the Explosion image
        public update(player_Y: number): void {
            this.visible=true;
            this.x = 10;
            this.y = player_Y;                          // Y coordinate of the explosion will be same as the Player's Y coordinate
           /* this.image = assets.getResult("Blood1");   // Display the explosion image
            
            setTimeout(() => {
                        this.image = assets.getResult("FishDestroy1");
                    }, 100);
            setTimeout(() => {
                        this.image = assets.getResult("FishDestroy2");
                    }, 200);
            setTimeout(() => {
                        this.image = assets.getResult("FishDestroy3");
                    }, 300);
            setTimeout(() => {
                        this.image = assets.getResult("FishDestroy4");
                    }, 400);
            setTimeout(() => {
                        this.image = assets.getResult("FishDestroy5");
                    }, 500);
            setTimeout(() => {
                        this.image = assets.getResult("FishDestroy6");
                    }, 600);
            setTimeout(() => {
                        this.image = assets.getResult("FishDestroy7");
                    }, 700);
            setTimeout(() => {
                        this.image = assets.getResult("FishDestroy8");
                    }, 800);
            setTimeout(() => {
                        this.image = assets.getResult("FishDestroy9");
                    }, 900);
                    */
        }

        public reset(player_Y: number): void {
            this.x = 10;
            this.y = player_Y;
            this.visible=false;          // Hides the explosion image or Set it to null
        }
    }
}
