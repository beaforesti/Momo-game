var background;
var player;
var cursors;
var star;
var map;
var layer;
var layer2;
var layer3;
var stars;
var salto = -500;
var velocità = 300;
var needRespawn = false;
var unico = true;
var pos;
var pausevar=false;
var enemy;
var enemy2;
var enemy3;
var weapon;
var weapon2;
var weapon3;
var weapon4;
var weapon5;
var weapon6;
var quads;
var quads2;
var quads3;
var cameray=6000
var slide5;
var slide6;
var slide7;
var slide8;

var img1var = true;
var img2var = false;
var img3var = false;
var img4var = false;



var level2State = {

preload:function() {
  game.stage.backgroundColor = '#85b5e1';
  game.load.image('sky', 'assets/cielo.png');
  game.load.image('background', 'Livello1_grattacieli_attraversabili.png');
  game.load.spritesheet('dude', 'assets/sprite_momo.png', 62.2, 100);
  game.load.tilemap('mappa', 'mappa.json', null, Phaser.Tilemap.TILED_JSON);
  game.load.image('tiles', 'tileset piattaforme lv2.png');
  game.load.image('tiles_erba', 'piattaforme.png');
  game.load.image('tufo', 'tufo.png');
  game.load.image('tilesverde', 'verde.png');
  game.load.image('nemico', 'assets/grigi.png');
  game.load.image('supersalto', 'assets/supersalto.png');
  game.load.image('burrone', 'assets/burrone.png');
  game.load.image('morte', 'immagini_gioco/grigi.png');
  game.load.image('candy', 'assets/proiettile.png');
  game.load.image('bolla', 'assets/bollatrasparente_giusta.png');
  game.load.image('pausa', 'assets/pausa.png');
  game.load.spritesheet('enemy', 'assets/sprite_grigio.png', 62, 100);
  game.load.image('quad', 'assets/quad.png');
  game.load.image('gru', 'assets/ascensore.png');
  game.load.image('slide5', 'immagini_gioco/Slide5.png');
  game.load.image('render_grigi', 'immagini_gioco/quadrotti.png');
  game.load.image('slide6', 'immagini_gioco/Slide6.png');
  game.load.image('momofelice', 'immagini_gioco/momo felice.png');
  game.load.image('barrasfondo', 'immagini_gioco/1Tavola disegno 3 copia 2.png');
  game.load.image('barra', 'immagini_gioco/1Tavola disegno 3 copia 6.png');
  game.load.image('capobarra', 'immagini_gioco/1Tavola disegno 3 copia 7.png');







  game.scale.pageAlignHorizontally = true;
  game.scale.pageAlignVertically = true;
  game.scale.refresh();

} ,









create:function() {





//GRANDEZZA DEL MONDO
    game.world.setBounds(0, 0, 6000, 608);
    background=game.add.sprite(-200, -200, 'sky');
    //background.fixedToCamera=true;
//BONUS
    stars = game.add.group();
    stars.enableBody = true;
//QUESTI SERVONO PER COSTRUIRE DUE LIVELLI SU TILED
quads = game.add.physicsGroup();
quads.enableBody = true;
quads2 = game.add.physicsGroup();
quads2.enableBody = true;
quads3 = game.add.physicsGroup();
quads3.enableBody = true;
quads.alpha=0;
quads2.alpha=0;
quads3.alpha=0;



//ROBA DI TILED
    map = game.add.tilemap('mappa');
    map.addTilesetImage('blocchi tiled','tiles')
    map.addTilesetImage('verde','tilesverde')
    map.addTilesetImage('piattaforme','tiles_erba')
    map.addTilesetImage('tufo','tufo')
    //map.addTilesetImage('tiles2')
//SERVE PER CREARE I BONUS SU TILED. GLI OGGETTI CHE SONO IN UN LIVELLO OBJECT DI NOME "STELLE", CHE HANNO COME NOME "STAR"
//(IL NOME SI IMPOSTA IN ALTO A DESTRA) NEL GIOCO DIVENTANO STELLE.
    map.createFromObjects('stelle', "stelle", 'star', 0, true, false, stars);
    map.createFromObjects('quad', "quad", 'quad', 0, true, false, quads);
    map.createFromObjects('quad', "quad3", 'quad', 0, true, false, quads3);
    map.createFromObjects('quad2', "quad2", 'quad', 0, true, false, quads2);
    //map.createFromObjects('Enemy', "Enemy", 'nemico', 0, true, false, enemy);
    quads.setAll('body.immovable', true);
    quads2.setAll('body.immovable', true);
    quads3.setAll('body.immovable', true);
    quads.setAll('body.checkCollision.down', false);
    quads2.setAll('body.checkCollision.down', false);
    //quads3.setAll('body.checkCollision.down', false);
    quads3.setAll('body.checkCollision.right', false);

    //quads.alpha=0;

//IMPOSTAZIONI MAPPA
    map.createLayer('Livello tiles');
    layer = map.createLayer('cacchine nuove');
    map.createLayer('piattaforme sotto');
    map.createLayer('piattaforme strane');
    map.createLayer('piattaforme nemici');
    layer3=map.createLayer('piattaforme nemici sopra');
    layer2 = map.createLayer('piattaforme sopra');

    layer.resizeWorld();

//COLLISIONE COL TERRENO
    map.setCollisionBetween(1, 60000, true, layer2);
    map.setCollisionBetween(1, 3000, true, layer3);



//NEMICI
    enemy = createEnemy(541,3680, 540, 620);
    enemy2 = createEnemy(300,2480,300,390);
    enemy3 = createEnemy(370,1880,370,450);
    enemy4 = createEnemy(200,4980,200,250);
    //enemy5 = createEnemy(1500,4500,1500,1580);
    enemy6 = createEnemy(1540,4280,1540,1580);



//BOLLE, COORDINATE
    bolla = createBolla(490,3570);
    bolla2 = createBolla(400,3470);
    bolla3 = createBolla(416,3200);
    bolla4 = createBolla(544,3100);
    //bolla5 = createBolla(672,3008);
    bolla6 = createBolla(450,2860);
    bolla15 = createBolla(1408,2700);
    bolla7 = createBolla(1504,2600);
    bolla8 = createBolla(1600,2500);
    bolla9 = createBolla(768,2020);
    bolla10 = createBolla(640,1920);
    bolla11 = createBolla(1184,1100);
    bolla12 = createBolla(1040,1000);
    bolla13 = createBolla(704,710);
    bolla14 = createBolla(550,608);


    bolla.body.checkCollision.down=false;
    bolla2.body.checkCollision.down=false;
    bolla3.body.checkCollision.down=false;
    bolla4.body.checkCollision.down=false;
    bolla6.body.checkCollision.down=false;
    bolla7.body.checkCollision.down=false;
    bolla8.body.checkCollision.down=false;
    bolla9.body.checkCollision.down=false;
    bolla10.body.checkCollision.down=false;
    bolla11.body.checkCollision.down=false;
    bolla12.body.checkCollision.down=false;
    bolla13.body.checkCollision.down=false;
    bolla14.body.checkCollision.down=false;
    bolla15.body.checkCollision.down=false;



    //var style = { font: "bold 32px Arial", fill: "#fff", boundsAlignH: "center", boundsAlignV: "middle" };

    //  The Text is positioned at 0, 100
    //text = game.add.text(0, 0, bolla, style);



//GRU
  gru = createGru(623,1675,1675,1450)
  gru2 = createGru(1130,2317,2317,2100)
  gru3 = createGru(1070,1380,1380,1180)
  gru4 = createGru(812,917,917,700)





// PLAYER
    player = game.add.sprite(1000,game.world.height-200, 'dude');
    //player = game.add.sprite(401,376 , 'dude');
    game.physics.arcade.enable(player);
    player.width = 43; player.height = 69;
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 1200;
    player.body.collideWorldBounds = true;
    //player.autoCull=true;
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.animations.add('right', [5, 6, 7, 8], 10, true);

    cursors = game.input.keyboard.createCursorKeys();
    jumpButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    pauseButton = game.input.keyboard.addKey(Phaser.Keyboard.P);
    reviveButton = game.input.keyboard.addKey(Phaser.Keyboard.R);



    pauseButton = game.input.keyboard.addKey(Phaser.Keyboard.D);

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

//I PROIETTILI DEI NEMICI
    weapon=createWeapon(enemy)
    weapon2=createWeapon(enemy2)
    weapon3=createWeapon(enemy3)
    weapon4=createWeapon(enemy4)
    //weapon5=createWeapon(weapon5, enemy5)
    weapon6=createWeapon(enemy6)

//AUTOFIRE
    game.time.events.loop(1000, enemyFire, this, weapon, player, enemy);
    game.time.events.loop(1000, enemyFire, this, weapon2, player, enemy2);
    game.time.events.loop(1000, enemyFire, this, weapon3, player, enemy3);
    game.time.events.loop(1000, enemyFire, this, weapon4, player, enemy4);
    //game.time.events.loop(1000, enemyFire, this, weapon5, player, enemy5);
    game.time.events.loop(1000, enemyFire, this, weapon6, player, enemy6);


    function enemyFire(weapon,player,enemy){
      if(player.y<=enemy.y+100&&player.y>enemy.y-100){
      weapon.fire()}
    }



    // ------------ FUNZIONI CREATE E UPDATE -------------//
    function createEnemy(x,y,leftLimit, rightLimit) {
      g = game.add.sprite(x,y,'enemy');
      g.width = 48; g.height = 80;
      game.physics.arcade.enable(g);
      g.body.collideWorldBounds=true;
      g.body.velocity.x = 100;
      g.leftLimit = leftLimit;
      g.rightLimit = rightLimit;
      g.animations.add('left', [0, 1, 2, 3], 7, true);
      g.animations.add('right', [5, 6, 7, 8], 7, true);
      g.innocuo=false;
      g.body.gravity.y=300;
      return g;
    }


    function createWeapon(player){
    wea = game.add.weapon(10, 'candy');
    wea.bullets.setAll("width", 20);
    wea.bullets.setAll("height", 20);
    game.physics.arcade.enable(wea);
    wea.setBulletBodyOffset(20, 20, 10, 10);
    wea.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    wea.collideWorldBounds = true;
    wea.bulletAngleOffset = 0;
    wea.bulletSpeed = 200;
    wea.trackSprite(player,10,10);

    return wea;
    }

    function createBolla(x,y,leftLimit, rightLimit) {
      b = game.add.sprite(x,y,'bolla');
      b.anchor.x=0.5;
      b.anchor.y=0.5;
      b.scale.setTo(0.7,0.7)
      game.physics.arcade.enable(b);
      b.body.immovable = true;
      //b.body.velocity.x = 100;
      b.innocuo = false;
      game.time.events.loop(1000, animazioneBolle, this, b);


      return b;
      b.setAll('body.checkCollision.down', false);


    }



    function animazioneBolle(b){

    anim1=game.add.tween(b.scale).to( { x: 0.7, y: 0.1*Math.random()+0.7 }, 10*Math.random()+900, Phaser.Easing.Linear.None, true);
    anim2=game.add.tween(b.scale).to( { x: 0.1*Math.random()+0.7, y: 0.1*Math.random()+0.7 }, 80*Math.random()+900, Phaser.Easing.Linear.None, true);
    anim2.chain(anim1)

    function starman() {

        anim1.start();

    }

    starman();
    }

    function createGru (x,y,bottomLimit, topLimit){
      gruz=game.add.sprite(x, y, 'gru');
      game.physics.arcade.enable(gruz);
      gruz.body.immovable = true;
      gruz.topLimit = topLimit;
      gruz.bottomLimit = bottomLimit;
      return gruz;
    }

}  ,



 update:function() {


   barra.scale.setTo((5424-cameray)*0.000098  , 0.5);
   capobarra.cameraOffset.x = (5424-cameray)*0.09;





   function img(){
     if(img1var==true){
       slide7 = game.add.sprite(0, 0, 'slide6');
       slide7.width=1024; slide7.height=768;
       slide7.fixedToCamera=true;
       slide6 = game.add.sprite(0, 0, 'render_grigi');
       slide6.width=1024; slide6.height=768;
       slide6.fixedToCamera=true;
       slide5 = game.add.sprite(-0, -0, 'slide5');
       slide5.width=1024; slide5.height=768;
       slide5.fixedToCamera=true;
       setTimeout(eliminaimg, 7000, slide5);
       setTimeout(eliminaimg, 14000, slide6);
       setTimeout(eliminaimg, 21000, slide7);
       img1var=false;
       img2var=true;
     }else if(img2var==true && player.y<=362){
       slide8 = game.add.sprite(0, 0, 'momofelice');
       slide8.width=1024; slide8.height=768;
       slide8.fixedToCamera=true;
       setTimeout(eliminaimg, 7000, slide8);
       setTimeout(function(){game.state.start('menu');}, 9000);
       img2var=false;
       //img3var=true;
     }

 }

   img();

   function eliminaimg(slide){
     game.camera.fade(0x000000, 1000);
     setTimeout(fade, 2000)

   function fade(){
       slide.kill()
       game.camera.flash(0x000000, 1000)
     }



   }








 //COLLIDE

   game.physics.arcade.collide(player, layer);
   game.physics.arcade.collide(player, layer2);
   game.physics.arcade.collide(player, gru);
   game.physics.arcade.collide(player, gru2);
   game.physics.arcade.collide(player, gru3);
   game.physics.arcade.collide(player, gru4);
   game.physics.arcade.collide(player, quads);
   game.physics.arcade.collide(player, quads2);
   game.physics.arcade.collide(player, quads3);

   game.physics.arcade.collide(enemy, layer);
   game.physics.arcade.collide(enemy2, layer);
   game.physics.arcade.collide(enemy3, layer);
   game.physics.arcade.collide(enemy4, layer);

   game.physics.arcade.collide(enemy6, layer);

   game.physics.arcade.collide(enemy, layer2);
   game.physics.arcade.collide(enemy2, layer2);
   game.physics.arcade.collide(enemy3, layer2);

   game.physics.arcade.collide(enemy, layer3);
   game.physics.arcade.collide(enemy2, layer3);
   game.physics.arcade.collide(enemy3, layer3);


   game.physics.arcade.collide(enemy4, quads);
   game.physics.arcade.collide(enemy4, quads2);
   game.physics.arcade.collide(enemy4, quads3);

   game.physics.arcade.collide(enemy6, quads);
   game.physics.arcade.collide(enemy6, quads2);
   game.physics.arcade.collide(enemy6, quads3);



   function mortefun() {
     if (needRespawn == false)
         {  //player.kill();
            morte = game.add.sprite(-0, -0, 'morte');
            morte.width=1024; morte.height=768;
            morte.fixedToCamera=true;
            game.camera.shake(0.01, 500);
            needRespawn = true;
            //setTimeout(respawn,1000)
            }


          }



   function respawn(){
                  if (needRespawn == true)
                     {game.camera.fade(0x000000, 2000);
                      setTimeout(function(){

                        if(cameray>=3360){
                          player.reset(1000,game.world.height-200);
                          //img1var=true;
                        }else{

                          player.x=270;
                          player.y=3152;
                        }

                        game.camera.flash(0x000000, 2000);
                        cameray=player.y;


                        morte.kill();
                        needRespawn = false;
                        unico = true;

                        //weapon.autofire = true;
                      }, 3000);

                      }
          }

          if(reviveButton.isDown) {respawn()};

 //UPDATE ENEMY, STABILISCE IL CAMBIO DI DIREZIONE DEL NEMICO
   function uenemy(g){
   if(g.x <= g.leftLimit) {
     g.body.velocity.x = 100;
     g.animations.play('right');

   } else if (g.x >= g.rightLimit) {
     g.body.velocity.x = -100;
     g.animations.play('left');
   }
 }



 //MORTE DEL GIOCATORE PER PROIETTILI
 game.physics.arcade.overlap(player, weapon.bullets, function(){mortefun()});
 game.physics.arcade.overlap(player, weapon2.bullets, function(){mortefun()});
 game.physics.arcade.overlap(player, weapon3.bullets, function(){mortefun()});
 game.physics.arcade.overlap(player, weapon4.bullets, function(){mortefun()});
 game.physics.arcade.overlap(player, weapon6.bullets, function(){mortefun()});




 uenemy(enemy)
 uenemy(enemy2)
 uenemy(enemy3)
 uenemy(enemy4)
 uenemy(enemy6)


 updateBolla(bolla);
 updateBolla(bolla2);
 updateBolla(bolla3);
 updateBolla(bolla4);
 updateBolla(bolla6);
 updateBolla(bolla7);
 updateBolla(bolla8);
 updateBolla(bolla9);
 updateBolla(bolla10);
 updateBolla(bolla11);
 updateBolla(bolla12);
 updateBolla(bolla13);
 updateBolla(bolla14);
 updateBolla(bolla15);




 updateGru(gru);
 updateGru(gru2);
 updateGru(gru3);
 updateGru(gru4);





 //RILEVA L'ANGOLO TRA IL NEMICO E IL GIOCATORE

   function getAngle(obj1, obj2)  {
     // angle in radians
     var angleRadians = Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x);
     // angle in degrees
     var angleDeg = (Math.atan2(obj2.y - obj1.y, obj2.x - obj1.x) * 180 / Math.PI);
     return angleDeg;
   }


 weapon.fireAngle=getAngle(enemy,player);
 weapon2.fireAngle=getAngle(enemy2,player);
 weapon3.fireAngle=getAngle(enemy3,player);
 weapon4.fireAngle=getAngle(enemy4,player);
 weapon6.fireAngle=getAngle(enemy6,player);






 //MOVIMENTO PLAYER
     player.body.velocity.x = 0;
     if (cursors.left.isDown)
     {
         //  Move to the left
         player.body.velocity.x = - velocità;

         player.animations.play('left');
     }
     else if (cursors.right.isDown)
     {
         //  Move to the right
         player.body.velocity.x = velocità;

         player.animations.play('right');
     }
     else
     {
         //  Stand still
         player.animations.stop();
         player.frame = 4;
     }

     if (jumpButton.isDown && (player.body.onFloor() || player.body.touching.down))
     {
         player.body.velocity.y = salto;



     }




     if(player.y<=cameray){
       cameray=player.y
     }

     if(cameray+384<=player.y){
       mortefun();
     }
      game.camera.focusOnXY(player.x + player.width/2, cameray);





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







       function updateGru(gru){
         if(gru.y <= gru.topLimit) {
           gru.body.velocity.y = 150;
         } else if (gru.y >= gru.bottomLimit) {
           gru.body.velocity.y = -150;
         }
       }





       function updateBolla(bolla) {
         game.physics.arcade.overlap(bolla, player, function(b,p) {
           //b.innocuo = true ;
         game.time.events.add(1500, function(){
            b.innocuo = true;
           })
         game.time.events.add(2500, function(){
              b.innocuo = false;
             })

       });


         if(bolla.innocuo == true) {
           bolla.alpha = 0.3;
           bolla.body.enable=false;

         }
         else if(bolla.innocuo == false){
           bolla.alpha = 1;
           bolla.body.enable=true;
           game.physics.arcade.collide(bolla, player);

         }


       };







 }




}
