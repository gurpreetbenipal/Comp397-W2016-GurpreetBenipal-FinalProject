module managers {
    //COLLISION MANAGER CLASS
    export class Collision {
        private _player: objects.Player;
        constructor(player: objects.Player) {
            this._player = player;
        }
        
        //PUBLIC METHODS
        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));
        }

        public checkForLevel1(object: objects.GameObject) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfHeight: number = this._player.height * 0.5;
            var objectHalfHeight: number = object.height * 0.5;
            var minimumDistance: number = playerHalfHeight + objectHalfHeight;

            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            
            //console.log(this.distance(startPoint,endPoint));
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                // check if it's a Bird hit
                if (object.name === "item" && object.image != null) {
                    createjs.Sound.play("pickupitem");              // Generate the Item pick sound
                    console.log("Item Picked!");
                    object.image = assets.getResult("");            // Hide the Item
                    scores += 100;               // Increment the player score by 100
                    if(scores >= 2000)
                        {
                            // Switch to the LEVEL2 Scene
                            scene = config.Scene.LEVEL2;   
                            changeScene();                          // Change the scene to LEVEL2 Scene                         
                        }
                }
                
                // check if it's a Dragon hit
                if (object.name === "seamonster" && object.isHit === false) {
                    createjs.Sound.play("firehit");                         // Generate the explosion sound
                    // Update the explosion image
                   // play.explosion.update(this._player.y - playerHalfHeight);
                    
                    // Hides the player image
                    this._player.image = assets.getResult("");

                    setTimeout(() => {
                        // Reset (Hide) the explosion image after half second
                       // play.explosion.reset(this._player.y - playerHalfHeight);
                        
                        // Show the player image
                        this._player.image = assets.getResult("Fish");
                    }, 500);

                    console.log("Sea Monster hit!");
                    object.isHit = true;                            // Make the isHit true, when dragon hits the player
                    level1.scoreboard.lives--;                        //Decrease the Player Lives by 1
                   
                    //Check if the Lives count reaches to less than zero
                    if (level1.scoreboard.lives < 0 && scores < 2000) {
                        level1.scoreboard.lives = 0;
                        createjs.Sound.stop();                     //Stop the background music
                        
                        // Switch to the END Scene
                        scene = config.Scene.END;    
                        changeScene();                          // Change the scene to END Scene
                    }
                }
               level1.scoreboard.update();                              // Update the Scoreboard (Lives and Scores)
            }
        }
        
        
        public checkForLevel2(object: objects.GameObject) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfHeight: number = this._player.height * 0.5;
            var objectHalfHeight: number = object.height * 0.5;
            var minimumDistance: number = playerHalfHeight + objectHalfHeight;

            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            
            //console.log(this.distance(startPoint,endPoint));
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                // check if it's a Bird hit
                if (object.name === "item" && object.image != null) {
                    createjs.Sound.play("pickupitem");              // Generate the Item pick sound
                    console.log("Item Picked!");
                    object.image = assets.getResult("");            // Hide the Item
                    scores += 100;                                  // Increment the player score by 100
                    if(scores >= 4000)
                        {
                            // Switch to the LEVEL3 Scene
                            scene = config.Scene.LEVEL3;   
                            changeScene();                          // Change the scene to LEVEL3 Scene                         
                        }
                }
                
                // check if it's a Dragon hit
                if (object.name === "seamonster" && object.isHit === false) {
                    createjs.Sound.play("firehit");                         // Generate the explosion sound
                    // Update the explosion image
                   // play.explosion.update(this._player.y - playerHalfHeight);
                    
                    // Hides the player image
                    this._player.image = assets.getResult("");

                    setTimeout(() => {
                        // Reset (Hide) the explosion image after half second
                       // play.explosion.reset(this._player.y - playerHalfHeight);
                        
                        // Show the player image
                        this._player.image = assets.getResult("Fish");
                    }, 500);

                    console.log("Sea Monster hit!");
                    object.isHit = true;                            // Make the isHit true, when dragon hits the player
                    level2.scoreboard.lives--;                        //Decrease the Player Lives by 1
                   
                    //Check if the Lives count reaches to less than zero
                    if (level2.scoreboard.lives < 0) {
                        level2.scoreboard.lives = 0;
                        createjs.Sound.stop();                     //Stop the background music
                        // Switch to the END Scene
                        scene = config.Scene.END;
                        changeScene();                             // Change the scene to END Scene
                    }
                }
               level2.scoreboard.update();                              // Update the Scoreboard (Lives and Scores)
            }
        }
        
        public checkForLevel3(object: objects.GameObject) {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var playerHalfHeight: number = this._player.height * 0.5;
            var objectHalfHeight: number = object.height * 0.5;
            var minimumDistance: number = playerHalfHeight + objectHalfHeight;

            startPoint.x = this._player.x;
            startPoint.y = this._player.y;
            endPoint.x = object.centerX + object.x;
            endPoint.y = object.centerY + object.y;
            
            //console.log(this.distance(startPoint,endPoint));
            if (this.distance(startPoint, endPoint) < minimumDistance) {
                // check if it's a ITEM hit
                if (object.name === "item" && object.image != null) {
                    createjs.Sound.play("pickupitem");              // Generate the Item pick sound
                    console.log("Item Picked!");
                    object.image = assets.getResult("");            // Hide the Item
                    scores += 100;                                  // Increment the player score by 100
                    if(scores >= 6000)
                        {
                            // Switch to the WINNING Scene
                            scene = config.Scene.LEVEL3;   
                            changeScene();                          // Change the scene to LEVEL3 Scene                         
                        }
                }
                
                // check if it's a Dragon hit
                if (object.name === "seamonster" && object.isHit === false) {
                    createjs.Sound.play("firehit");                         // Generate the explosion sound
                    // Update the explosion image
                   // play.explosion.update(this._player.y - playerHalfHeight);
                    
                    // Hides the player image
                    this._player.image = assets.getResult("");

                    setTimeout(() => {
                       // Reset (Hide) the explosion image after half second
                       // play.explosion.reset(this._player.y - playerHalfHeight);
                        
                        // Show the player image
                        this._player.image = assets.getResult("Fish");
                    }, 500);

                    console.log("Sea Monster hit!");
                    object.isHit = true;                            // Make the isHit true, when dragon hits the player
                    level2.scoreboard.lives--;                        //Decrease the Player Lives by 1
                   
                    //Check if the Lives count reaches to less than zero
                    if (level2.scoreboard.lives < 0) {
                        level2.scoreboard.lives = 0;
                        createjs.Sound.stop();                     //Stop the background music
                        // Switch to the END Scene
                        scene = config.Scene.END;
                        changeScene();                             // Change the scene to END Scene
                    }
                }
               level2.scoreboard.update();                              // Update the Scoreboard (Lives and Scores)
            }
        }
    }
}