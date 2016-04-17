// LEVEL3 SCENE

var fired:boolean = false;
module scenes {
    // LEVEL3 CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Level3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++
        private _titleLabel: objects.Label;
        private _sea: objects.Sea;
        private _player:objects.Player;
        private _item: objects.Item;
        private _seamonster: objects.SeaMonsterLevel3;
        private _fireballs: objects.Fireball[];
        private _bullet: objects.Bullet;
        private _fireballsCount:number;
        
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
            
            //Set the Fireballs Count
            this._fireballsCount = 6;
            
            //Instantiate Fireballs Array
            this._fireballs = new Array<objects.Fireball>();
            
            // added Sky to the scene
            this._sea = new objects.Sea("Level3Sea");
            this.addChild(this._sea);
            
            //Add TITLE Label
            this._titleLabel = new objects.Label(
                "LEVEL 3",
                "bold 26px CONSOLAS",
                "#F0333c",
                config.Screen.CENTER_X,
                30, true);
            this.addChild(this._titleLabel);
            
            // added Item to the scene
            this._item = new objects.Item("Shell", "level3");
            this.addChild(this._item);
            
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            // added SeaMonster to the scene
            this._seamonster= new objects.SeaMonsterLevel3();
            this.addChild(this._seamonster);
            
           
            
            
            //added ScoreSystem to the scene
            this.scoreboard = new objects.ScoreSystem();
            this.addChild(this.scoreboard);
            
            //Add the Key Press event listener to the scene
            //stage.on("keypress",this._keyPressed,this);
            window.onkeydown=this._keyPressed;
            
            // added Bullet to the scene
            this._bullet= new objects.Bullet(this._player);
            this.addChild(this._bullet);
            
            // added Fireballs to the scene
            for (var fireball: number = 0; fireball < this._fireballsCount; fireball++) {
                this._fireballs[fireball] = new objects.Fireball("Fireball",this._seamonster);
                this.addChild(this._fireballs[fireball]);
            }
            
            // add this scene to the global stage container
            stage.addChild(this);
            
            
        }
        // LEVEL3 Scene updates here
        public update(): void {
            this._sea.update();
            this._player.update();
            this._item.update();
            this._seamonster.update();
            
            this._fireballs.forEach(fireball => {
                fireball.update();
                // Check the Collision with Player
                //this._collision.checkForLevel3(fireball);
            });
            
            if(fired == true)
            {
                //this._bullet.y = this._player.y + this._player.height * 0.5;
                this._bullet.update();
            }
        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        //Key Pressed Event Handler
        private _keyPressed(event:KeyboardEvent):void{
            console.log("Key pressed");
            switch (event.keyCode) {
                    case config.KEY.SPACE:
                        console.log("Space Key pressed");
                        fired=true;
                        level3._bullet.y = level3._player.y + level3._player.height * 0.5;
                        level3._bullet.x = 71;
                        //level3._bullet.update(level3._player);
                        break;
            }
        }
    }
}