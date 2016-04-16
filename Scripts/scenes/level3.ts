// LEVEL3 SCENE
module scenes {
    // LEVEL3 CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Level3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++
        private _titleLabel: objects.Label;
        private _sea: objects.Sea;
        private _player:objects.Player;
        private _item: objects.Item;
        
        //PUBLIC INSTANCE VARIABLES ++++++++++++
        public scoreboard: objects.ScoreSystem;
        
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
            createjs.Sound.play("Level3Sound", { "loop": -1 });
            
            // added Sky to the scene
            this._sea = new objects.Sea("Level3Sea");
            this.addChild(this._sea);
            
            //Add TITLE Label
            this._titleLabel = new objects.Label(
                "LEVEL 3",
                "bold 26px CONSOLAS",
                "#0033cc",
                config.Screen.CENTER_X,
                30, true);
            this.addChild(this._titleLabel);
            
            // added Item to the scene
            this._item = new objects.Item("Shell", "level3");
            this.addChild(this._item);
            
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            //added ScoreSystem to the scene
            this.scoreboard = new objects.ScoreSystem();
            this.addChild(this.scoreboard);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // PLAY Scene updates here
        public update(): void {
            this._sea.update();
            this._player.update();
            this._item.update();
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
    }
}