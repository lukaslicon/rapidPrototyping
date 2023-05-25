class outro extends Phaser.Scene {
    constructor() {
        super('outro')
    }

    create() {
        this.add.image();
        this.add.text(700, 450, "Victory").setFontSize(80);
        this.add.text(700, 450, "Click anywhere to restart").setFontSize(30);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('intro'));
        });
    }
}