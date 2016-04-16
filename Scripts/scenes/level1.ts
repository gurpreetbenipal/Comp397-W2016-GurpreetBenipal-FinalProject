// LEVEL1 SCENE
module scenes {
    // LEVEL1 CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Level1 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++
        private _titleLabel: objects.Label;
        private _sea: objects.Sea;
        private _player: objects.Player;
        private _item: objects.Item;
        private _seamonsters: objects.SeaMonsterLevel1[];
        private _seamonsterCount: number;
        private _collision: managers.Collision;
        
        //PUBLIC INSTANCE VARIABLES ++++++++++++
        public scoreboard: objects.ScoreSystem;
        public explosion: objects.Explosion;
        
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
            createjs.Sound.play("Level1Sound", { "loop": -1 });
            
            //Set the SeaMonster Count
            this._seamonsterCount = 2;
            
            //Instantiate SeaMonster Array
            this._seamonsters = new Array<objects.SeaMonsterLevel1>();
            
            // added Sea to the scene
            this._sea = new objects.Sea("Level1Sea");
            this.addChild(this._sea);
            
            //Add TITLE Label
            this._titleLabel = new objects.Label(
                "LEVEL 1",
                "bold 26px CONSOLAS",
                "#0033cc",
                config.Screen.CENTER_X,
                30, true);
            this.addChild(this._titleLabel);
            
            // added Item to the scene
            this._item = new objects.Item("Coin", "level1");
            this.addChild(this._item);
            
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            //added Explosion to the scene
            this.explosion = new objects.Explosion();
            this.addChild(this.explosion);
            
            // added SeaMonsters to the scene
            for (var seamonster: number = 0; seamonster < this._seamonsterCount; seamonster++) {
                this._seamonsters[seamonster] = new objects.SeaMonsterLevel1("SeaMonster1Level1");
                this.addChild(this._seamonsters[seamonster]);
            }
           
            
            //added ScoreSystem to the scene
            this.scoreboard = new objects.ScoreSystem();
            this.addChild(this.scoreboard);
           
            // added Collision Manager to the scene
            this._collision = new managers.Collision(this._player);

            // add this scene to the global stage container
            stage.addChild(this);
        }

        // Level1 Scene updates here
        public update(): void {
            this._sea.update();
            this._player.update();
            this._item.update();

            this._seamonsters.forEach(seamonster => {
                seamonster.update();
                // Check the Collision with SEAMONSTER
                this._collision.checkForLevel1(seamonster);
            });
            
            // Check the Collision with ITEM
            this._collision.checkForLevel1(this._item);
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
    }
}