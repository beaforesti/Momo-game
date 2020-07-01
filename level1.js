//---------------------------VARIABILI-----------------------------------------------------------------------
var bonus_1;
var pausevar=false;
var salto0 = -280;
var velocità0 = 150;
var needRespawn = false;
var respawnx = 0;
var unico = true;
var min = 230*32;
var max = 286*32;
var autoy = 630;
var prima = true;
var level1State = {
//---------------------------CREATE--------------------------------------------------------------------------
     create:function(){

        //  game.state.start('level2');
          //SFONDO MONTAGNE
              background_m=game.add.sprite(0, 150, 'sfondo_montagne');
              background_m.alpha=0.7;
              background_m.scale.setTo(1,1);
       //BACKGROUND
           background=game.add.sprite(0, -300, 'background');
           background.alpha=1;
           background.scale.setTo(1,0.7);
       //TILEMAP
           map = game.add.tilemap('mappa');
           map.addTilesetImage('terreno', 'tiles')
           layer1 = map.createLayer('livello1');
           layer1.resizeWorld();
           map.setCollisionBetween(1, 3000, true, layer1);

       //PLAYER
           player = game.add.sprite(0, 0, 'player');
           game.physics.arcade.enable(player);
           player.body.collideWorldBounds = true;
           player.scale.setTo(0.8,0.8);
           player.body.gravity.y = 300;
           player.animations.add('left', [0,1,2,3], 10, true);
           player.animations.add('right', [5, 6, 7, 8], 10, true);
           player.body.bounce.y = 0.15;
       //BARRA DI AVANZAMENTO
           barrasfondo = game.add.sprite( 30 , 40 , 'barrasfondo');
           barrasfondo.fixedToCamera = true;
           barrasfondo.scale.setTo( 0.5 );
           barra = game.add.sprite( 30 , 40 , 'barra');
           barra.fixedToCamera = true;
           barra.scale.setTo( 0.5 );
           capobarra = game.add.sprite ( 30 , 22 , 'capobarra');
           capobarra.fixedToCamera = true;
           capobarra.scale.setTo ( 1 );
       //SLIDE COMANDI
           slide_com = game.add.sprite (0 , 0 ,'slide_com');
           slide_com.fixedToCamera = true;
           setTimeout( function() {slide_com.kill();} , 7000);
       //ASCENSORE
           platform_1 = game.add.sprite(4290 , 650, 'platform_1');
           game.physics.arcade.enable(platform_1);
           platform_1.body.immovable = true;
       //AUTOMOBILI
       auto1 = game.add.sprite(game.rnd.integerInRange(min , max), autoy, 'autos');
       auto1.frame=0;
       auto1.scale.setTo(0.5,0.5)
       game.physics.arcade.enable(auto1);
       auto1.body.velocity.x= -200 - Math.random()*100;
       auto2 = game.add.sprite(game.rnd.integerInRange(min , max), autoy, 'autos');
       auto2.frame=1;
       auto2.scale.setTo(0.5,0.5)
       game.physics.arcade.enable(auto2);
       auto2.body.velocity.x= -200 - Math.random()*100;
       auto3 = game.add.sprite(game.rnd.integerInRange(min , max), autoy, 'autos');
       auto3.frame=2;
       auto3.scale.setTo(0.5,0.5)
       game.physics.arcade.enable(auto3);
       auto3.body.velocity.x= -200 - Math.random()*100;
       auto4 = game.add.sprite(game.rnd.integerInRange(min , max), autoy, 'autos');
       auto4.frame=3;
       auto4.scale.setTo(0.5,0.5)
       game.physics.arcade.enable(auto4);
       auto4.body.velocity.x= 200 + Math.random()*100;
       auto5 = game.add.sprite(game.rnd.integerInRange(min , max), autoy, 'autos');
       auto5.frame=4;
       auto5.scale.setTo(0.5,0.5)
       game.physics.arcade.enable(auto5);
       auto5.body.velocity.x= 200 + Math.random()*100;
       auto6 = game.add.sprite(game.rnd.integerInRange(min , max), autoy, 'autos');
       auto6.frame=5;
       auto6.scale.setTo(0.5,0.5)
       game.physics.arcade.enable(auto6);
       auto6.body.velocity.x= 200 + Math.random()*100;

       //TUNNEL_1
           tunnel_1 = game.add.sprite(230*32 , 576, 'tunnel_1');
       //TUNNEL_1
           tunnel_2 = game.add.sprite(284.6*32 , 576, 'tunnel_2');
       //BONUS SALTO
           bonus1a = game.add.sprite( 950 , 270  , 'bonus_1' );
           game.physics.arcade.enable(bonus1a);
           bonus1a.body.gravity.y = 200;
           bonus1a.body.bounce.y = 1;
           bonus1b = game.add.sprite( 4900 , 300  , 'bonus_1' );
           game.physics.arcade.enable(bonus1b);
           bonus1b.body.gravity.y = 200;
           bonus1b.body.bounce.y = 1;
       //BONUS ORA 1
           bonus_ora1 = game.add.sprite(2350 , 500 , 'bonus_ora1');
           game.physics.arcade.enable(bonus_ora1);
           bonus_ora1.body.gravity.y = 200;
           bonus_ora1.body.bounce.y=1;

       //BONUS ORA 2
           bonus_ora2 = game.add.sprite(6475 , 550 , 'bonus_ora2');
           game.physics.arcade.enable(bonus_ora2);
           bonus_ora2.body.gravity.y = 200;
           bonus_ora2.body.bounce.y=1;
       //BONUS ORA 2
           bonus_ora3 = game.add.sprite(9775 , 55 , 'bonus_ora3');
           game.physics.arcade.enable(bonus_ora3);
           bonus_ora3.body.gravity.y = 200;
           bonus_ora3.body.bounce.y=1;
       //FUMO 1
           weapon = game.add.weapon(20, 'fumo');
           weapon.bulletAngleOffset = 90;
           weapon.bulletSpeed = 70;
           weapon.autofire = true;
           game.physics.arcade.enable(weapon);
           weapon.fireRate = 700;
           weapon.bulletSpeedVariance = 10;
           weapon.bulletAngleVariance = 5;
           weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
           weapon.x= 2630;
           weapon.y=666;
       //FUMO 2
           weapon2 = game.add.weapon(20, 'fumo');
           weapon2.bulletAngleOffset = 90;
           weapon2.bulletSpeed = 70;
           weapon2.autofire = true;
           game.physics.arcade.enable(weapon2);
           weapon2.fireRate = 700;
           weapon2.bulletSpeedVariance = 10;
           weapon2.bulletAngleVariance = 5;
           weapon2.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
           weapon2.x= 6657;
           weapon2.y=666;
       //INTERFACCIA:OROLOGIO
           or_1 = game.add.sprite(862, 0, 'or_1');
           or_1.fixedToCamera = true;
           or_1.scale.setTo(0.7);

       //CAMERA
           game.camera.follow(player);
       //COMANDI
           cursors = game.input.keyboard.createCursorKeys();
           jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
           pauseButton = game.input.keyboard.addKey(Phaser.Keyboard.P);
           reviveButton = game.input.keyboard.addKey(Phaser.Keyboard.R);

     },




//----------------------------UPDATE--------------------------------------------------------------------------
     update:function(){

      //PARALLASSE
          background.x=-0.20*game.camera.x;
      //BARRA DI AVANZAMENTO
          barra.scale.setTo(0.0000517*player.x , 0.5);
          capobarra.cameraOffset.x = 20 + player.x*0.045;



      //BONUS ORA 1
           this.game.physics.arcade.overlap(player, bonus_ora1 , function()
                {bonus_ora1.kill();
                 weapon.autofire = false;
                 respawnx = 2730;
                 or_2 = game.add.sprite(862, 0, 'or_2');
                 or_2.fixedToCamera = true;
                 or_2.scale.setTo(0.7);
                 });
      //BONUS ORA 2
           this.game.physics.arcade.overlap(player, bonus_ora2 , function()
                {bonus_ora2.kill();
                 weapon2.autofire = false;
                 respawnx = 6750;
                 or_3 = game.add.sprite(862, 0, 'or_3');
                 or_3.fixedToCamera = true;
                 or_3.scale.setTo(0.7);});
      //BONUS ORA 3
           this.game.physics.arcade.overlap(player, bonus_ora3 , function()
                {bonus_ora3.kill();
                  game.state.start('level2');
                /* slide_5 = game.add.sprite(0 , 0 , 'slide_5') ; slide_5.fixedToCamera = true;
                 setTimeout(function() {slide_5.kill();  game.state.start('level2');} , 6000); */
                 ;});
      //BONUS_1A_FUNCTION ORA FIORE
           function bonus1afunction(player , bonus1a) {
                bonus1a.kill();
                supersalto = game.add.sprite(player.x + 100 , 100 , 'supersalto');
                supersalto.scale.setTo(0.6,0.6);
                salto0 = -350;
                velocità0 = 200;
                  setTimeout(function(){
                  salto0=-280;
                  velocità0 = 150;
                  supersalto.kill();
                } , 5000) ; } ;
          if (player.x > 852) {
                if(prima == true )
                  {prima = false;
                                      slide_4 = game.add.sprite(0 ,0 , 'slide_4'); slide_4.fixedToCamera = true; player.kill();
                   setTimeout(function(){ fb_2 = game.add.sprite(0 , 0 , 'fb_2') ; fb_2.fixedToCamera = true;},                7000);
                   setTimeout(function(){ slide_4.kill(); fb_2.kill(); player.reset(852 , 403 );
                   } , 14000); } };

      //BONUS_1B_FUNCTION
           function bonus1bfunction(player , bonus1b) {
                 bonus1b.kill();
                 supersalto = game.add.sprite(player.x + 100 , 100 , 'supersalto');
                 supersalto.scale.setTo(0.6,0.6);
                 salto0 = -350;
                 velocità0 = 200;
                  setTimeout(function(){
                     salto0 = -300;
                     velocità0 = 150;
                     supersalto.kill();
                  }, 5000);
                        };
     //ASCENSORE PLATFORM_1
           game.physics.arcade.collide(player, platform_1, function() {
                if (unico == true)
                  {platform_1.body.velocity.y = -60;
                   unico = false;}})
                if (platform_1.y < 225)
                  {platform_1.body.velocity.y = 60;} ;
                if (platform_1.y > 650)
                  {platform_1.body.velocity.y = -60;} ;
     //FUNZIONE MORTE
          function mortefun(){
               if(needRespawn == false)
                {player.kill();
                 dead = game.add.sprite(-138, -150, 'dead');
                 dead.fixedToCamera=true;
                 game.camera.shake(0.01, 1000);
                 needRespawn = true;} };
      //FUNZIONE RESPAWN
          function respawnfun(){
                if(needRespawn == true)
                  {platform_1.reset(4290, 650);
                   platform_1.body.velocity.y = 0;
                   unico = true;
                   player.revive();
                   player.x = respawnx;
                   player.y = 200;
                   bonus1a.reset(950 , 270);
                   bonus1b.reset(4900 , 300);
                   weapon.autofire = true ;
                   weapon2.autofire = true ;
                   game.camera.fade(0x00000, 2000);
                      setTimeout(function(){
                        game.camera.reset();
                        game.camera.follow(player);
                        dead.kill();
                        needRespawn = false; } , 2000) }; };


  if(reviveButton.isDown) {respawnfun()};

      //COLLISION
          this.game.physics.arcade.collide(player, layer1);
          this.game.physics.arcade.collide(bonus1a, layer1);
          this.game.physics.arcade.collide(bonus1b, layer1);
          this.game.physics.arcade.collide(bonus_ora1, layer1);
          this.game.physics.arcade.collide(bonus_ora2, layer1);
          this.game.physics.arcade.collide(bonus_ora3, layer1);
          this.game.physics.arcade.overlap(player, bonus1a, bonus1afunction);
          this.game.physics.arcade.overlap(player, bonus1b, bonus1bfunction);
          this.game.physics.arcade.overlap(weapon.bullets , player , mortefun);
          this.game.physics.arcade.overlap(weapon2.bullets, player, mortefun);

      //MORTE PER CADUTA
          if(player.y > 650)
              {mortefun()}
      //PAUSA
          if(pauseButton.isDown && pausevar==false){
              game.paused=true;
              paus=game.add.sprite(0,0, 'pausa');
              paus.fixedToCamera=true;
              document.onkeydown = function() {
                game.paused = false;
                paus.kill();
                pausevar = true;
                game.time.events.add(300, function() {pausevar = false})
                document.onkeydown = null}
                }

      //PLAYER WALK
          player.body.velocity.x = 0;
           if (cursors.left.isDown)
              {player.body.velocity.x = -velocità0;
               player.animations.play('left');}
           else if (cursors.right.isDown)
              {player.body.velocity.x = velocità0;
               player.animations.play('right');}
           else {player.animations.stop();
                 player.frame = 4;}
           if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
                {player.body.velocity.y = salto0;}

                if (auto1.x < min ) {auto1.x = max; auto1.body.velocity.x= -200 - Math.random()*100;};
                if (auto2.x < min ) {auto2.x = max; auto2.body.velocity.x= -200 - Math.random()*100;};
                if (auto3.x < min ) {auto3.x = max; auto3.body.velocity.x= -200 - Math.random()*100;};
                if (auto4.x > max ) {auto4.x = min; auto4.body.velocity.x= 200 + Math.random()*100;};
                if (auto5.x > max ) {auto5.x = min; auto5.body.velocity.x= 200 + Math.random()*100;};
                if (auto6.x > max ) {auto6.x = min; auto6.body.velocity.x= 200 + Math.random()*100;};
               game.physics.arcade.overlap(auto1, player, mortefun);
               game.physics.arcade.overlap(auto2, player, mortefun);
               game.physics.arcade.overlap(auto3, player, mortefun);
               game.physics.arcade.overlap(auto4, player, mortefun);
               game.physics.arcade.overlap(auto5, player, mortefun);
               game.physics.arcade.overlap(auto6, player, mortefun);



      // game.state.start('level2')
     }

}
