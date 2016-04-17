
module objects {
    export class ScoreSystem extends createjs.Container {
        // PRIVATE INSTANCE VARIABLES+++++++++++++++++++++++
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        private _enemyhealthLabel: objects.Label;
        
        // PUBLIC INSTANCE VARIABLES+++++++++++++++++++++++
        //public scores: number = 0;
        public lives: number;
        public enemyLives:number;
        
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
            //this.scores = 0;
            this.lives = 5;
            
            // Create a New Score Label
            this._scoreLabel = new objects.Label("Scores : " + scores, "bold 22px Consolas", "#ff6600", 20, 10, false);
            // Create a New Lives Label
            this._livesLabel = new objects.Label("Lives Left : " + this.lives, "bold 22px Consolas", "#ff6600", 520, 10, false);
             
            this.addChild(this._scoreLabel);
            this.addChild(this._livesLabel);
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        public update(): void {
            //Update the Text of Scores and Lives
            this._scoreLabel.text = "Scores : " + scores;
            this._livesLabel.text = "Lives Left : " + this.lives;
        }
        
        // Added New Labels for Level3
        public addEnemyHealthLabel():void{
            this.enemyLives=100;
            this.lives = 100;
            this.removeChild(this._scoreLabel);
            this.removeChild(this._livesLabel);
            
            // Create a New Score Label
            this._scoreLabel = new objects.Label("Scores : " + scores, "bold 20px Consolas", "#ffffff", 20, 10, false);
            this.addChild(this._scoreLabel);
            
            // Create a New Lives Label
            this._livesLabel = new objects.Label("Lives Left : " + this.lives, "bold 20px Consolas", "#ffffff", 470, 10, false);
            this.addChild(this._livesLabel);
            this._livesLabel.text = "Player Health : " + this.lives + "%";
            
            // Create a Enemy Health Label
            this._enemyhealthLabel = new objects.Label("Enemy Health : " + this.enemyLives +"%", "bold 20px Consolas", "#ffffff", 470, 40, false);
            this.addChild(this._enemyhealthLabel);
        }
        
        //Update Method for Level3
        public updateForLevel3(): void {
            //Update the Text of Scores and Player and Enemy Health
            this._scoreLabel.text = "Scores : " + scores;
            this._livesLabel.text = "Player Health : " + this.lives + "%";
            this._enemyhealthLabel.text="Enemy Health : "+this.enemyLives + "%";
        }
    }
}