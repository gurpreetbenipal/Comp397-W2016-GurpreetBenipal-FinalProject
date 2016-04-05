// LEVEL1 SCENE
module scenes {
    // LEVEL1 CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Level1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++
        private _titleLabel: objects.Label;
        private _sea: objects.Sea;
        private _player: objects.Player;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // added Sea to the scene
            this._sea = new objects.Sea("Sea");
            this.addChild(this._sea);
            
            //Add TITLE Label
            this._titleLabel = new objects.Label(
                "LEVEL 1",
                "bold 24px Cambiria",
                "#0033cc",
                config.Screen.CENTER_X,
                30, true);
            this.addChild(this._titleLabel);
            
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            // add the Score Board to the Game Over Scene
           // this.addChild(play.scoreboard);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._sea.update();
            this._player.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
    }
}