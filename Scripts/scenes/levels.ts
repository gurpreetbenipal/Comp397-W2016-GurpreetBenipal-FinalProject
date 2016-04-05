// MENU SCENE
module scenes {
    //MENU CLASS ++++++++++++++++++++++++++++++++
    export class Levels extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++
        private _titleLabel: objects.Label;
        private _level1Button: objects.Button;
        private _level2Button: objects.Button;
        private _level3Button: objects.Button;
        private _backButton: objects.Button;
        private _sea: objects.Sea;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++++
        
        // Start Method
        public start(): void {
            // added Sea to the scene
            this._sea = new objects.Sea("Sea");
            this.addChild(this._sea);
            
            //Add TITLE Label
            this._titleLabel = new objects.Label(
                "Select Your Level",
                "bold 24px Cambiria",
                "#0033cc",
                config.Screen.CENTER_X,
                30, true);
            this.addChild(this._titleLabel);
            
            // add the LEVEL1 button to the Levels scene
            this._level1Button = new objects.Button(
                "Level1Button",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y - 100, true);
            this.addChild(this._level1Button);
            
            // LEVEL1 Button event listener
            this._level1Button.on("click", this._level1ButtonClick, this);
            
            
            // add the LEVEL2 button to the Levels scene
            this._level2Button = new objects.Button(
                "Level2Button",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y , true);
            this.addChild(this._level2Button);
            
            // INSTRUCTIONS Button event listener
            this._level2Button.on("click", this._level2ButtonClick, this);
            
            // add the LEVEL3 button to the MENU scene
            this._level3Button = new objects.Button(
                "Level3Button",
                config.Screen.CENTER_X,
                config.Screen.CENTER_Y + 100, true);
            this.addChild(this._level3Button);
            
            // LEVEL3 Button event listener
            this._level3Button.on("click", this._level3ButtonClick, this);
            
            // add the BACK button to the MENU scene
            this._backButton = new objects.Button(
                "BackButton",
                config.Screen.CENTER_X + 230,
                config.Screen.CENTER_Y + 200, true);
            this.addChild(this._backButton);
            
            // BACK Button event listener
            this._backButton.on("click", this._backButtonClick, this);
      
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // Menu Scene updates here
        public update(): void {
            this._sea.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        // LEVEL1 Button click event handler
        private _level1ButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("buttonpress");
            // Switch to the LEVEL1 Scene
            scene = config.Scene.LEVEL1;
            changeScene();
        }
        
        // LEVEL2 Button click event handler
        private _level2ButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("buttonpress");
            // Switch to the LEVEL2 Scene
            scene = config.Scene.LEVEL2;
            changeScene();
        }
        
        // LEVEL3 Button click event handler
        private _level3ButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("buttonpress");
            // Switch to the LEVEL3 Scene
            scene = config.Scene.LEVEL3;

            changeScene();
        }
        
        // BACK Button click event handler
        private _backButtonClick(event: createjs.MouseEvent) {
            createjs.Sound.play("buttonpress");
            // Switch to the MENU Scene
            scene = config.Scene.MENU;

            changeScene();
        }


    }
}