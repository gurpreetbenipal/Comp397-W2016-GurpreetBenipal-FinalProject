var config;
(function (config) {
    // Scene Constants
    var Scene = (function () {
        function Scene() {
        }
        Scene.MENU = 0;
        Scene.PLAY = 1;
        Scene.END = 2;
        Scene.INSTRCUTIONS = 3;
        Scene.LEVELS = 4;
        Scene.LEVEL1 = 5;
        Scene.LEVEL2 = 6;
        Scene.LEVEL3 = 7;
        Scene.WIN = 8;
        return Scene;
    })();
    config.Scene = Scene;
    // Screen Constants
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 700;
        Screen.HEIGHT = 480;
        Screen.CENTER_X = 350;
        Screen.CENTER_Y = 240;
        return Screen;
    })();
    config.Screen = Screen;
    // Game Constants
    var Game = (function () {
        function Game() {
        }
        Game.FPS = 60;
        return Game;
    })();
    config.Game = Game;
    //Keyboard Key Constants
    var KEY = (function () {
        function KEY() {
        }
        KEY.SPACE = 32;
        return KEY;
    })();
    config.KEY = KEY;
})(config || (config = {}));
//# sourceMappingURL=config.js.map