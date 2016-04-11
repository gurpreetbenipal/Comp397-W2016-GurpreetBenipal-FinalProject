
module objects {
    export class ScoreSystem extends createjs.Container {
        // PRIVATE INSTANCE VARIABLES+++++++++++++++++++++++
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;
        
        // PUBLIC INSTANCE VARIABLES+++++++++++++++++++++++
        //public scores: number = 0;
        public lives: number;
        
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++
        constructor() {
            super();
            //this.scores = 0;
            this.lives = 5;
            
            // Create a New Score Label
            this._scoreLabel = new objects.Label("Scores : " + scores, "bold 25px Cambria", "#ff6600", 20, 10, false);
            // Create a New Lives Label
            this._livesLabel = new objects.Label("Lives Left : " + this.lives, "bold 25px Cambria", "#ff6600", 550, 10, false);

            this.addChild(this._scoreLabel);
            this.addChild(this._livesLabel);
        }
        
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        public update(): void {
            //Update the Text of Scores and Lives
            this._scoreLabel.text = "Scores : " + scores;
            this._livesLabel.text = "Lives Left : " + this.lives;
        }
    }
}