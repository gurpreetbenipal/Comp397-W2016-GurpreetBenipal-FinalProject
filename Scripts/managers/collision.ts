module managers {
    //COLLISION MANAGER CLASS +++++++++++++++++++++++++++++++++++
    export class Collision {
        
        //PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
        private _player: objects.Player;
        
        //CONSTRCUTOR ++++++++++++++++++++++++++++++++++++++++++
        constructor(player: objects.Player) {
            this._player = player;
        }
        
        //PUBLIC METHODS+++++++++++++++++++++++++++++++++++++++++++++++++
        
        //Method to Check the Distance of two Points
        public distance(startPoint: createjs.Point, endPoint: createjs.Point): number {
            return Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2));
        }

        //Method to Check collision for LEVEL1
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

            if (this.distance(startPoint, endPoint) < minimumDistance) {
                // check if it's a Bird hit
                if (object.name === "item" && object.image != null) {
                    createjs.Sound.play("pickupitem");              // Generate the Item pick sound
                    object.image = assets.getResult("");            // Hide the Item
                   
                    scores += 100;               // Increment the player score by 100
                    if (scores >= 2000) {
                        // Switch to the LEVEL2 Scene
                        scene = config.Scene.LEVEL2;
                        changeScene();                          // Change the scene to LEVEL2 Scene                         
                    }
                }
                
                // check if it's a Monster hit
                if (object.name === "seamonster" && object.isHit === false) {
                    createjs.Sound.play("MonsterEatFish");                         // Generate the Monster Eating sound
                    //Update the explosion image
                    level1.explosion.update(this._player.y - playerHalfHeight);
                    
                    // Hides the player image
                    this._player.visible = false;


                    setTimeout(() => {
                        // Show the player image
                        this._player.visible = true;
                        // Reset (Hide) the explosion image after half second
                        level1.explosion.reset(this._player.y - playerHalfHeight);
                    }, 1000);

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

        //Method to Check collision for LEVEL2
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


            if (this.distance(startPoint, endPoint) < minimumDistance) {
                // check if it's a Bird hit
                if (object.name === "item" && object.image != null) {
                    createjs.Sound.play("pickupitem");              // Generate the Item pick sound
                    object.image = assets.getResult("");            // Hide the Item
                    scores += 100;                                  // Increment the player score by 100
                    if (scores >= 4000) {
                        // Switch to the LEVEL3 Scene
                        scene = config.Scene.LEVEL3;
                        changeScene();                          // Change the scene to LEVEL3 Scene                         
                    }
                }
                
                // check if it's a Monster hit
                if (object.name === "seamonster" && object.isHit === false) {
                    createjs.Sound.play("MonsterEatFish");                         // Generate the Monster Eating sound
                    // Update the explosion image
                    level2.explosion.update(this._player.y - playerHalfHeight);
                    
                    // Hides the player image
                    this._player.visible = false;

                    setTimeout(() => {
                        // Reset (Hide) the explosion image after half second
                        level2.explosion.reset(this._player.y - playerHalfHeight);
                        
                        // Show the player image
                        this._player.visible = true;
                    }, 1000);

                    console.log("Sea Monster hit!");
                    object.isHit = true;                            // Make the isHit true, when monster hits the player
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

        //Method to Check collision for LEVEL3
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

            if (this.distance(startPoint, endPoint) < minimumDistance) {
                // check if it's a ITEM hit
                if (object.name === "item" && object.image != null) {
                    createjs.Sound.play("pickupitem");              // Generate the Item pick sound
                    object.image = assets.getResult("");            // Hide the Item
                    scores += 100;                                  // Increment the player score by 100
                    if (scores >= 6000) {
                        // Switch to the WINNING Scene
                        scene = config.Scene.WIN;
                        changeScene();                          // Change the scene to Winning Scene                         
                    }
                }
                
                // check if it's a Dragon hit
                if (object.name === "fireball" && object.isHit === false) {
                    createjs.Sound.play("firehit");                         // Generate the explosion sound
                    // Update the explosion image
                    level3.explosion.update(this._player.y - playerHalfHeight);
                    
                    // Hides the player image
                    this._player.visible = false;

                    setTimeout(() => {
                        // Reset (Hide) the explosion image after half second
                        level3.explosion.reset(this._player.y - playerHalfHeight);
                        
                        // Show the player image
                        this._player.visible = true;
                    }, 1000);

                    console.log("Sea Monster hit!");
                    object.isHit = true;                            // Make the isHit true, when dragon hits the player
                    level3.scoreboard.lives--;                        //Decrease the Player Lives by 1
                   
                    //Check if the Lives count reaches to less than zero
                    if (level3.scoreboard.lives < 0) {
                        level3.scoreboard.lives = 0;
                        createjs.Sound.stop();                     //Stop the background music
                        // Switch to the END Scene
                        scene = config.Scene.END;
                        changeScene();                             // Change the scene to END Scene
                    }
                }
                level3.scoreboard.updateForLevel3();                             // Update the Scoreboard
            }
        }

        //Method to Check Bullet collision with the Monster in LEVEL3
        public checkForBulletCollision(bullet: objects.BulletFish, monster: objects.SeaMonsterLevel3): void {
            var startPoint: createjs.Point = new createjs.Point();
            var endPoint: createjs.Point = new createjs.Point();
            var monsterHalfHeight: number = monster.height * 0.5;
            var bulletHalfHeight: number = bullet.height * 0.5;
            var minimumDistance: number = monsterHalfHeight + bulletHalfHeight;

            startPoint.x = bullet.width + bullet.x;
            startPoint.y = bullet.centerY + bullet.y;

            endPoint.x = monster.x;
            endPoint.y = monster.y;

            if (this.distance(startPoint, endPoint) < minimumDistance) {
                
                // check if Bullet hits first time
                if (bullet.isHit === false) {
                    console.log("Bullet hit!");
                    bullet.isHit = true;                            // Make the isHit true, when bullet hits the dragon
                   
                    level3.scoreboard.enemyLives -= 10;                        //Decrease the Enemy Lives by 1
                   
                    //Check if the Lives count reaches to less than zero
                    if (level3.scoreboard.enemyLives <= 0) {
                        level3.scoreboard.enemyLives = 0;
                        createjs.Sound.stop();                     //Stop the background music
                        // Switch to the WIN Scene
                        scene = config.Scene.WIN;
                        changeScene();                             // Change the scene to WIN Scene
                    }
                }
                level3.scoreboard.updateForLevel3();                             // Update the Scoreboard
            }
        }
    }
}