module config {

    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static PLAY: number = 1;
        public static END: number = 2;
        public static INSTRCUTIONS: number = 3;
        
        public static LEVELS: number = 4;
        public static LEVEL1: number = 5;
        public static LEVEL2: number = 6;
        public static LEVEL3: number = 7;
        
        public static WIN: number = 8;
        
        
    }
    
    // Screen Constants
    export class Screen {
        public static WIDTH: number = 700;
        public static HEIGHT: number = 480;
        public static CENTER_X: number = 350;
        public static CENTER_Y: number = 240;
    }
    
    // Game Constants
    export class Game {
        public static FPS: number = 60;
    }
    
    //Keyboard Key Constants
    
    export class KEY{
        public static SPACE: number = 32;
    }
    
    
   
}