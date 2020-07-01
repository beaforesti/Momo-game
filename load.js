var loadState = {

     preload: function(){
       game.scale.pageAlignHorizontally = true;
       game.scale.pageAlignVertically = true;
       game.stage.backgroundColor = '#1b2b85';
       game.scale.refresh();
   //MENU
       game.load.image('copertina' , 'assets0/sprites_menu/senza_pulsanti/copertina.jpg');
       game.load.image('autori' , 'assets0/sprites_menu/senza_pulsanti/autori.png');
       game.load.image('crediti' , 'assets0/sprites_menu/senza_pulsanti/crediti.png');
       game.load.image('pul_play' , 'assets0/sprites_menu/pulsanti/pul_play.png');
       game.load.image('pul_crediti' , 'assets0/sprites_menu/pulsanti/pul_crediti.png');
       game.load.image('pul_autori' , 'assets0/sprites_menu/pulsanti/pul_autori.png');
       game.load.image('pul_momo' , 'assets0/sprites_menu/pulsanti/pul_momo.png');
   //SLIDES
       game.load.image('slide_1' , 'assets0/sprites_menu/slides/Slide1.png');
       game.load.image('slide_2' , 'assets0/sprites_menu/slides/Slide2.png');
       game.load.image('slide_3' , 'assets0/sprites_menu/slides/Slide3.png');
       game.load.image('slide_4' , 'assets0/sprites_menu/slides/Slide4.png');
       game.load.image('slide_5' , 'assets0/sprites_menu/slides/Slide5.png');
       game.load.image('slide_6' , 'assets0/sprites_menu/slides/Slide6.png');
       game.load.image('slide_com' , 'assets0/sprites_menu/slides/Slide_com.png');
   //FLASHBACK
       game.load.image('fb_1' , 'assets0/sprites_menu/flashbacks/fb_1.png');
       game.load.image('fb_2' , 'assets0/sprites_menu/flashbacks/fb_2.png');
       game.load.image('fb_3' , 'assets0/sprites_menu/flashbacks/fb_3.png');
   //LIVELLO1
       game.load.spritesheet('player', 'assets0/sprites_lv1/player.png', 63, 100);
       game.load.image('background', 'assets0/sprites_lv1/background.png');
       game.load.tilemap('mappa', 'assets0/maps/mappa.json', null, Phaser.Tilemap.TILED_JSON);
       game.load.image('tiles', 'assets0/maps/L1_superficie_tiled.png');
       game.load.image('or_1', 'assets0/sprites_lv1/orologio_1.png');
       game.load.image('or_2', 'assets0/sprites_lv1/orologio_2.png');
       game.load.image('or_3', 'assets0/sprites_lv1/orologio_3.png');
       game.load.image('or_4', 'assets0/sprites_lv1/orologio_4.png');
       game.load.image('platform_1', 'assets0/sprites_lv1/platform_1.png');
       game.load.image('bonus_1' , 'assets0/sprites_lv1/bonus_1.png');
       game.load.image('bonus_ora1' , 'assets0/sprites_lv1/ora_1.png');
       game.load.image('bonus_ora2' , 'assets0/sprites_lv1/ora_2.png');
       game.load.image('bonus_ora3' , 'assets0/sprites_lv1/ora_3.png');
       game.load.image('pausa' , 'assets0/sprites_lv1/pausa.png');
       game.load.image('fumo' , 'assets0/sprites_lv1/fumo.png');
       game.load.image('tunnel_1' , 'assets0/sprites_lv1/tunnel_1.png');
       game.load.image('tunnel_2' , 'assets0/sprites_lv1/tunnel_2.png');
       game.load.image('supersalto' , 'assets0/sprites_lv1/supersalto.png');
       game.load.image('dead' , 'assets0/sprites_lv1/dead.png');
       game.load.image('barra' , 'assets0/sprites_lv1/barra.png');
       game.load.image('barrasfondo' , 'assets0/sprites_lv1/barrasfondo.png');
       game.load.image('capobarra' , 'assets0/sprites_lv1/capobarra.png');
       game.load.spritesheet('autos', 'assets0/sprites_lv1/automobile.png', 371, 152 , 6);
       game.load.image('sfondo_montagne' , 'assets0/sprites_lv1/sfondo_montagne.png');
       game.load.image('animor' , 'assets0/sprites_lv1/animor.png');



     },

     create: function(){

       game.state.start('menu');
     }
};
