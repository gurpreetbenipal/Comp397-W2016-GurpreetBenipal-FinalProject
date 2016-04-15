module objects {
    // EXPLOSION Class  ++++++++++++++++++++++++++++++++++++
    export class Explosion extends createjs.Bitmap {

        constructor() {
            super(assets.getResult("Blood1"));
            this.reset(0);
        }   
        
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++++
        
        // Update the Explosion image
        public update(player_Y: number): void {
            this.x = 10;
            this.y = player_Y;                          // Y coordinate of the explosion will be same as the Player's Y coordinate
            this.image = assets.getResult("Blood1");   // Display the explosion image
            
            setTimeout(() => {
                        this.image = assets.getResult("Blood1");
                    }, 100);
            setTimeout(() => {
                        this.image = assets.getResult("Blood2");
                    }, 200);
            setTimeout(() => {
                        this.image = assets.getResult("Blood3");
                    }, 300);
            setTimeout(() => {
                        this.image = assets.getResult("Blood4");
                    }, 400);
            setTimeout(() => {
                        this.image = assets.getResult("Blood5");
                    }, 500);
            setTimeout(() => {
                        this.image = assets.getResult("Blood6");
                    }, 600);
            setTimeout(() => {
                        this.image = assets.getResult("Blood7");
                    }, 700);
            setTimeout(() => {
                        this.image = assets.getResult("Blood8");
                    }, 800);
        }

        public reset(player_Y: number): void {
            this.x = 10;
            this.y = player_Y;
            this.image = assets.getResult("");          // Hides the explosion image or Set it to null
        }
    }
}
