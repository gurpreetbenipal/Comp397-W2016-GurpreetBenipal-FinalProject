module config {

    // Scene Constants
    export class Scene {
        public static MENU: number = 0;
        public static PLAY: number = 1;
        public static END: number = 2;
        
        public static LEVELS: number = 3;
        public static LEVEL1: number = 4;
        public static LEVEL2: number = 5;
        public static LEVEL3: number = 6;
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
   
}