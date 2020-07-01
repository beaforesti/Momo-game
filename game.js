var game = new Phaser.Game(1024, 768, Phaser.AUTO, 'gameDiv');


game.state.add('boot' , bootState);
game.state.add('load' , loadState);
game.state.add('menu' , menuState);
game.state.add('level1' , level1State);
game.state.add('level2' , level2State);

game.state.start('boot');
