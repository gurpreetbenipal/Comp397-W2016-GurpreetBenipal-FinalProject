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
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
        }
        
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++
        
        // Start Method
        public start(): void {
            //Set the SeaMonster Count
            this._seamonsterCount = 2;
            
            //Instantiate SeaMonster Array
            this._seamonsters = new Array<objects.SeaMonsterLevel1>();
            
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
            
             // added Item to the scene
            this._item = new objects.Item("Coin");
            this.addChild(this._item);
            
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
             // added SeaMonsters to the scene
            for (var seamonster: number = 0; seamonster < this._seamonsterCount; seamonster++) {
                this._seamonsters[seamonster] = new objects.SeaMonsterLevel1("SeaMonster1Level1");
                this.addChild(this._seamonsters[seamonster]);
            }
           
            
            // add the Score Board to the Game Over Scene
           // this.addChild(play.scoreboard);

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
                
            });
        }
        
        
        //EVENT HANDLERS ++++++++++++++++++++
    }
}