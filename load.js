class load extends Phaser.Scene {
    constructor(){
        super('load');
    }
    preload ()
    {
        this.load.path = 'assets/';
        this.load.image('fairy', 'fairy.png');
        this.load.image('snail', 'snail.png');
        this.load.image('roly', 'roly.png');
        this.load.image('badge', 'badge.png');

    }
    create()
    {
        this.scene.start('intro');
    }
}
