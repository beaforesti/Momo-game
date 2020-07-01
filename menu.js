var menuState = {

  create:function(){
       //game.state.start('level2');
       copertina=game.add.sprite(0,0, 'copertina');

       pul_crediti = game.add.button (890 , 20 , 'pul_crediti' , function(){
                   crediti = game.add.sprite( 0 , 0 , 'crediti');
                   momo_pul_cr = game.add.button( 880 , 33 , 'pul_momo' , function() {
                                            crediti.kill();
                                            momo_pul_cr.kill();
                                          });
                                       });
       pul_autori = game.add.button (940 , 20 , 'pul_autori' , function(){
                  autori = game.add.sprite( 0 , 0 , 'autori');
                  momo_pul_au = game.add.button( 880 , 33 , 'pul_momo' , function() {
                                           autori.kill();
                                           momo_pul_au.kill();
                                          });


       });

      pul_play = game.add.button (140 , 340 , 'pul_play' , function() {
                                    slide_1 = game.add.sprite( 0 , 0 , 'slide_1');
                                       setTimeout(function(){fb_1 = game.add.sprite( 0 , 0 , 'fb_1');
                                           setTimeout(function(){  slide_2 = game.add.sprite( 0 , 0 , 'slide_2');
                                              setTimeout(function(){  fb_3 = game.add.sprite(0,0,'fb_3');
                                                 setTimeout(function(){  slide_3 = game.add.sprite(0,0,'slide_3');
                                                    setTimeout(function(){  game.state.start('level1');
                                                  }  , 2000);
                                               }  , 2000);
                                             } , 2000);
                                           }, 2000);
                                         }, 4000);

                                     });

     } ,

  update:function(){


      //game.state.start('level1');

    }
};
