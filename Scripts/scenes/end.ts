// END SCENE
module scenes {
    // END CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class End extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++
        private _gameoverLabel: objects.Label;
        private _playAgainButton: objects.Button;
        //private _sky: objects.Sky;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // added Sky to the scene
            //this._sky = new objects.Sky();
            //this.addChild(this._sky);
            
            //Add GAME OVER Label
            this._gameoverLabel = new objects.Label(
                "GAME OVER !",
                "bold 60px Cambiria",
                "#990000",
                config.Screen.CENTER_X + 50, config.Screen.CENTER_Y - 40, true);
            this.addChild(this._gameoverLabel);
            
            // add the Score Board to the Game Over Scene
           // this.addChild(play.scoreboard);
            
            // add the PLAY AGAIN button to the OVER scene
            this._playAgainButton = new objects.Button(
                "PlayAgainButton",
                config.Screen.CENTER_X + 50,
                config.Screen.CENTER_Y + 100, true);
            this.addChild(this._playAgainButton);
           
            // PLAY AGAIN Button event listener
            this._playAgainButton.on("click", this._restartButtonClick, this);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            //this._sky.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // START_OVER Button click event handler
        private _restartButtonClick(event: createjs.MouseEvent) {
            //Generate Button Press Sound
            createjs.Sound.play("buttonpress");
            // Switch to the INTRO Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}