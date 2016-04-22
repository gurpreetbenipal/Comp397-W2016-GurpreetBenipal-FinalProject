// LEVEL3 SCENE

var fired: boolean = false;
module scenes {
    // LEVEL3 CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Level3 extends objects.Scene {
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++
        private _titleLabel: createjs.Sprite;
        private _sea: objects.Sea;
        private _player: objects.Player;
        private _item: objects.Item;
        private _seamonster: objects.SeaMonsterLevel3;
        private _fireballs: objects.Fireball[];
        private _bullet: objects.BulletFish;
        private _fireballsCount: number;
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
            createjs.Sound.play("Level3Sound", { "loop": -1 });
            
            //Set the Fireballs Count
            this._fireballsCount = 6;
            
            //Instantiate Fireballs Array
            this._fireballs = new Array<objects.Fireball>();
            
            // added Sky to the scene
            this._sea = new objects.Sea("Level3Sea");
            this.addChild(this._sea);
            
            //added ScoreSystem to the scene
            this.scoreboard = new objects.ScoreSystem();
            this.addChild(this.scoreboard);
            this.scoreboard.addEnemyHealthLabel();
            
            //Add TITLE Label
            this._titleLabel = new createjs.Sprite(textureAtlas, "Level3Label");
            this._titleLabel.x = config.Screen.CENTER_X - 80;
            this._titleLabel.y = 0;

            this.addChild(this._titleLabel);
            
            // added Item to the scene
            this._item = new objects.Item("Shell", "level3");
            this.addChild(this._item);
            
            // added Player to the scene
            this._player = new objects.Player();
            this.addChild(this._player);
            
            //added Explosion to the scene
            this.explosion = new objects.Explosion();
            this.addChild(this.explosion);
            
            // added Bullet to the scene
            this._bullet = new objects.BulletFish(this._player);
            this.addChild(this._bullet);
            
            // added SeaMonster to the scene
            this._seamonster = new objects.SeaMonsterLevel3();
            this.addChild(this._seamonster);
            
            
            // added Collision Manager to the scene
            this._collision = new managers.Collision(this._player);
            
            //Add the Key Press event listener to the scene
            window.onkeydown = this._keyPressed;
            
            
            // added Fireballs to the scene
            for (var fireball: number = 0; fireball < this._fireballsCount; fireball++) {
                this._fireballs[fireball] = new objects.Fireball("Fireball", this._seamonster);
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
            
            // Check the Collision with ITEM
            this._collision.checkForLevel3(this._item);

            this._fireballs.forEach(fireball => {
                fireball.update();
                // Check the Collision with Player
                this._collision.checkForLevel3(fireball);
            });

            if (fired == true) {
                this._bullet.update();
                // Check the Collision with Bullet
                this._collision.checkForBulletCollision(this._bullet, this._seamonster);

            }
        }
        
        //EVENT HANDLERS ++++++++++++++++++++
        
        //Key Pressed Event Handler
        private _keyPressed(event: KeyboardEvent): void {
            switch (event.keyCode) {
                case config.KEY.SPACE:
                    fired = true;                             //Set the Bullet fired true when SPACEBAR is pressed                               
                    level3._bullet.visible = true;
                    createjs.Sound.play("BulletSound");
                                
                    //Set the X and Y position of bullet
                    
                        level3._bullet.x = 71;
                        level3._bullet.y = level3._player.y + level3._player.height * 0.5;
                    
                    break;
            }
        }
    }
}