// LEVEL2 SCENE
module scenes {
    // LEVEL2 CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Level2 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++
        private _titleLabel: createjs.Sprite;
        private _sea: objects.Sea;
        private _player: objects.Player;
        private _item: objects.Item;
        private _seamonsters: objects.SeaMonsterLevel2[];
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
            createjs.Sound.play("Level2Sound", { "loop": -1 });
            
            //Set the SeaMonster Count
            this._seamonsterCount = 4;
            
            //Instantiate SeaMonster Array
            this._seamonsters = new Array<objects.SeaMonsterLevel2>();
            
            // added Sea to the scene
            this._sea = new objects.Sea("Level2Sea");
            this.addChild(this._sea);
            
            //added ScoreSystem to the scene
            this.scoreboard = new objects.ScoreSystem();
            this.addChild(this.scoreboard);
            
            //Add TITLE Label2
            this._titleLabel = new createjs.Sprite(textureAtlas, "Level2Label");
            this._titleLabel.x = config.Screen.CENTER_X - 80;
            this._titleLabel.y = 0;
            this.addChild(this._titleLabel);
            
            // added Item to the scene
            this._item = new objects.Item("Coin", "level2");
            this.addChild(this._item);
            
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            //added Explosion to the scene
            this.explosion = new objects.Explosion();
            this.addChild(this.explosion);
            
            // added SeaMonsters to the scene
            for (var seamonster: number = 0; seamonster < this._seamonsterCount; seamonster++) {
                this._seamonsters[seamonster] = new objects.SeaMonsterLevel2("SeaMonster1Level2");
                this.addChild(this._seamonsters[seamonster]);
            }
           
            

            // added Collision Manager to the scene
            this._collision = new managers.Collision(this._player);
            
            // add this scene to the global stage container
            stage.addChild(this);
        }

        // Level2 Scene updates here
        public update(): void {
            this._sea.update();
            this._player.update();
            this._item.update();

            this._seamonsters.forEach(seamonster => {
                seamonster.update();
                // Check the Collision with SEAMONSTER
                this._collision.checkForLevel2(seamonster);
            });
            // Check the Collision with ITEM
            this._collision.checkForLevel2(this._item);
        }
    }
}