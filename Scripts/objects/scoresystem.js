var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    //SCORESYSTEM CLASS ++++++++++++++++++++++++++++++++++++
    var ScoreSystem = (function (_super) {
        __extends(ScoreSystem, _super);
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++
        function ScoreSystem() {
            _super.call(this);
            this.lives = 5;
            //Add background to the ScoreSystem
            this._background = new createjs.Shape();
            this._background.graphics.beginFill("#000000").drawRect(0, 0, 700, 40);
            this.addChild(this._background);
            // Create a New Score Label
            this._scoreLabel = new objects.Label("Scores : " + scores, "bold 22px Consolas", "#FFFFFF", 20, 10, false);
            // Create a New Lives Label
            this._livesLabel = new objects.Label("Lives Left : " + this.lives, "bold 22px Consolas", "#FFFFFF", 520, 10, false);
            this.addChild(this._scoreLabel);
            this.addChild(this._livesLabel);
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++
        ScoreSystem.prototype.update = function () {
            //Update the Text of Scores and Lives
            this._scoreLabel.text = "Scores : " + scores;
            this._livesLabel.text = "Lives Left : " + this.lives;
        };
        // Added New Labels for Level3
        ScoreSystem.prototype.addEnemyHealthLabel = function () {
            this.enemyLives = 100;
            this.lives = 100;
            this.removeChild(this._scoreLabel);
            this.removeChild(this._livesLabel);
            // Create a New Score Label
            this._scoreLabel = new objects.Label("Scores : " + scores, "bold 20px Consolas", "#ffffff", 20, 10, false);
            this.addChild(this._scoreLabel);
            // Create a New Lives Label
            this._livesLabel = new objects.Label("Lives Left : " + this.lives, "bold 18px Consolas", "#ffffff", 475, 5, false);
            this.addChild(this._livesLabel);
            this._livesLabel.text = "Player Health : " + this.lives + "%";
            // Create a Enemy Health Label
            this._enemyhealthLabel = new objects.Label("Enemy Health  : " + this.enemyLives + "%", "bold 18px Consolas", "#ffffff", 475, 25, false);
            this.addChild(this._enemyhealthLabel);
        };
        //Update Method for Level3
        ScoreSystem.prototype.updateForLevel3 = function () {
            //Update the Text of Scores and Player and Enemy Health
            this._scoreLabel.text = "Scores : " + scores;
            this._livesLabel.text = "Player Health : " + this.lives + "%";
            this._enemyhealthLabel.text = "Enemy Health  : " + this.enemyLives + "%";
        };
        return ScoreSystem;
    })(createjs.Container);
    objects.ScoreSystem = ScoreSystem;
})(objects || (objects = {}));
//# sourceMappingURL=scoresystem.js.map