// END SCENE
module scenes {
    // END CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++
        private _gameoverLabel: objects.Label;
        private _playAgainButton: objects.Button;
        private _sea: objects.Sea;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // Stop the Previous Background Music
            createjs.Sound.stop();
            
            // Generate the Background Music Infinitely
            createjs.Sound.play("SeaWavesSound", { "loop": -1 });
            
            // added Sea to the scene
            this._sea = new objects.Sea("Level1Sea");
            this.addChild(this._sea);
            
            //Add GAME OVER Label
            this._gameoverLabel = new objects.Label(
                "GAME OVER !",
                "bold 60px Cambiria",
                "#990000",
                config.Screen.CENTER_X + 20, config.Screen.CENTER_Y - 40, true);
            this.addChild(this._gameoverLabel);
            
            // add the Score Board to the Game Over Scene
           // this.addChild(play.scoreboard);
            
            // add the PLAY AGAIN button to the OVER scene
            this._playAgainButton = new objects.Button(
                "PlayAgainButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 100, true);
            this.addChild(this._playAgainButton);
           
            // PLAY AGAIN Button event listener
            this._playAgainButton.on("click", this._playAgainButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // END Scene updates here
        public update(): void {
            this._sea.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // PLAY_AGAIN Button click event handler
        private _playAgainButtonClick(event: createjs.MouseEvent) {
            //Generate Button Press Sound
            createjs.Sound.play("buttonpress");
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}