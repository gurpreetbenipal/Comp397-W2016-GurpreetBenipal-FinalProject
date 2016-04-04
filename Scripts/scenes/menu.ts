// MENU SCENE
module scenes {
    //MENU CLASS ++++++++++++++++++++++++++++++++
    export class Menu extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _welcomeLabel: objects.Label;
        private _playButton: objects.Button;
        private _instructionsButton: objects.Button;
        private _levelsButton: objects.Button;
        private _sea: objects.Sea;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // added Sky to the scene
            this._sea = new objects.Sea();
            this.addChild(this._sea);
            
            //Add WELCOME Label
            this._welcomeLabel = new objects.Label(
                "WELCOME TO 'THE SEA WORLD'",
                "bold 24px Cambiria",
                "#009900",
                config.Screen.CENTER_X + 30,
                30, true);
            this.addChild(this._welcomeLabel);
            
            // add the PLAY button to the MENU scene
            this._playButton = new objects.Button(
                "PlayButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y - 100, true);
            this.addChild(this._playButton);
            
            // Play Button event listener
            this._playButton.on("click", this._playButtonClick, this);
            
            
            // add the INSTRUCTIONS button to the MENU scene
            this._instructionsButton = new objects.Button(
                "InstructionsButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y , true);
            this.addChild(this._instructionsButton);
            
            // INSTRUCTIONS Button event listener
            this._instructionsButton.on("click", this._instructionsButtonClick, this);
            
            // add the LEVELS button to the MENU scene
            this._levelsButton = new objects.Button(
                "LevelsButton",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 100, true);
            this.addChild(this._levelsButton);
            
            // LEVELS Button event listener
            this._levelsButton.on("click", this._levelsButtonClick, this);
      
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // Menu Scene updates here
        public update(): void {
            this._sea.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // PLAY Button click event handler
        private _playButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("buttonpress");
            // Switch to the PLAY Scene
            scene = config.Scene.PLAY;
            
            // Switch the THEME of the Scene to DAYTHEME
            //theme = config.Sky.DAYTHEME;
            
            // Generate the Background Music Infinitely
            createjs.Sound.play("dayplaysound", { "loop": -1 });
            changeScene();
        }
        
        // INSTRUCTIONS Button click event handler
        private _instructionsButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("buttonpress");
            // Switch to the Instructions Scene
            scene = config.Scene.PLAY;

            changeScene();
        }
        
         // LEVELS Button click event handler
        private _levelsButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("buttonpress");
            // Switch to the LEVELS Scene
            scene = config.Scene.PLAY;

            changeScene();
        }


    }
}