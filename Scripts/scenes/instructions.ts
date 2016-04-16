// INSTRUCTIONS SCENE
module scenes {
    // INSTRUCTIONS CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Instructions extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++
        private _nextButton: objects.Button;
        private _backButton: objects.Button;
        private _sea: objects.Sea;
        private _instructions:createjs.Bitmap;
        private _instructionsFor: string;
        
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
            this._sea = new objects.Sea("InstructionsBG");
            this.addChild(this._sea);
            
            // added Instructions to the scene
            this._instructions = new createjs.Bitmap(assets.getResult("Level1Instructions"));
            this.addChild(this._instructions);
            
             // add the BACK button to the INSTRUCTIONS scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X - 170,
                config.Screen.CENTER_Y + 210, true);
            this.addChild(this._backButton);
           
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
            
            // add the NEXT button to the INSTRUCTIONS scene
            this._nextButton = new objects.Button(
                "NextButton",
                config.Screen.CENTER_X + 170,
                config.Screen.CENTER_Y + 210, true);
            this.addChild(this._nextButton);
           
            // NEXT Button event listener
            this._nextButton.on("click", this._nextButtonClick, this);

            //Set the level name for which the instructions need to be displayed
            this._instructionsFor="level2";
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // INSTRUCTIONS Scene updates here
        public update(): void {
            this._sea.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // NEXT Button click event handler
        private _nextButtonClick(event: createjs.MouseEvent) {
            //Generate Button Press Sound
            createjs.Sound.play("buttonpress");
            switch (this._instructionsFor) {
                case "level1":
                    console.log("Instructions for Level1");
                    this._instructions.image = assets.getResult("Level1Instructions");
                    this._instructionsFor="level2";
                    break;
                case "level2":
                    console.log("Instructions for Level2");
                    this._instructions.image = assets.getResult("Level2Instructions");
                    this._instructionsFor="level3";
                    break;
                case "level3":
                    console.log("Instructions for Level3");
                    this._instructions.image = assets.getResult("Level3Instructions");
                    this._instructionsFor="level1";
                    break;
                default:
                    break;
            }
        }
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            //Generate Button Press Sound
            createjs.Sound.play("buttonpress");
            // Switch to the MENU Scene
            scene = config.Scene.MENU;
            changeScene();
        }
    }
}