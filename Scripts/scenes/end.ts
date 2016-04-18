// END SCENE
module scenes {
    // END CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++
        //private _gameoverLabel: objects.Label;
        private _gameoverLabel: createjs.Bitmap;
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
            this._sea = new objects.Sea("CommonBackground");
            this.addChild(this._sea);
            
            //Add GAME OVER Label
            this._gameoverLabel = new createjs.Bitmap(assets.getResult("GameOver"));
            this._gameoverLabel.x = 100;
            this._gameoverLabel.y = config.Screen.CENTER_Y - 120;
            this.addChild(this._gameoverLabel);
            
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