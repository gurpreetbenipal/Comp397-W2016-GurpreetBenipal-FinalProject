var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var ScoreSystem = (function (_super) {
        __extends(ScoreSystem, _super);
        //CONSTRUCTOR++++++++++++++++++++++++++++++++++++++++
        function ScoreSystem() {
            _super.call(this);
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
        ScoreSystem.prototype.update = function () {
            //Update the Text of Scores and Lives
            this._scoreLabel.text = "Scores : " + scores;
            this._livesLabel.text = "Lives Left : " + this.lives;
        };
        return ScoreSystem;
    })(createjs.Container);
    objects.ScoreSystem = ScoreSystem;
})(objects || (objects = {}));
//# sourceMappingURL=scoresystem.js.map