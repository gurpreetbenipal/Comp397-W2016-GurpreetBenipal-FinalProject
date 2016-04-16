// PLAY SCENE
module scenes {
    export class Play extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
       
        
        //PUBLIC INSTANCE VARIABLES ++++++++++++
     
        
        
        // CONSTRUCTOR ++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++
        
        // Start Method
        public start(): void {



            stage.addChild(this);

        }

        // PLAY Scene updates here
        public update(): void {

        }
    }
}