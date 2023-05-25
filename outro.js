class outro extends Phaser.Scene {
    constructor() {
        super('outro')
    }

    create() {
        let v = this.add.text(750,250, "Victory").setFontSize(80);
        let restart = this.add.text(650,850, "Tap/Click anywhere to restart.").setFontSize(30).setFill('#f0000f');
        this.tweens.add({
            targets: [v],
            y: 350,  // End position of the text
            duration: 1000,  // Duration of the tween in milliseconds
            ease: 'pulse',  // pulse easing function
            yoyo: true,  // Make the tween reverse after reaching the end
            repeat: -1  // Repeat the tween indefinitely
        })        
        this.tweens.add({
            targets: [restart],
            y: 750,  // End position of the text
            duration: 1000,  // Duration of the tween in milliseconds
            ease: 'pulse',  // pulse easing function
            yoyo: true,  // Make the tween reverse after reaching the end
            repeat: -1  // Repeat the tween indefinitely
        })

        let roly = this.add.image(600,300, 'roly');
        let badge = this.add.image(600,400, 'badge');
        this.tweens.add({
            targets: [roly, badge],
            y: 700,  // End position of the text
            duration: 2000,  // Duration of the tween in milliseconds
            ease: 'Bounce',  // Bounce easing function
            yoyo: true,  // Make the tween reverse after reaching the end
            repeat: -1  // Repeat the tween indefinitely
        })
        

        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('intro'));
        });
    }
}