class load extends Phaser.Scene {
    constructor(){
        super('load');
    }
    preload ()
    {
        this.load.path = 'assets/';
        this.image.load = ()
    }
    create()
    {
        this.scene.start('intro');
    }
}
