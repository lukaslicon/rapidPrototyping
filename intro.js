
class intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }

    create() {
//title
        let title = this.add.text(450,250, "Roly Poly: To the End").setFontSize(80);
        // Create a tween to animate the text
        this.tweens.add({
            targets: title,
            y: 300,  // End position of the text
            duration: 2000,  // Duration of the tween in milliseconds
            ease: 'pulse',  // Bounce easing function
            yoyo: true,  // Make the tween reverse after reaching the end
            repeat: -1  // Repeat the tween indefinitely
        });

//fairy
        let fairy = this.add.image(660, 540, 'fairy');
        this.tweens.add({
            targets: fairy,
            y: 700,  // End position of the text
            duration: 2000,  // Duration of the tween in milliseconds
            ease: 'Bounce',  // Bounce easing function
            yoyo: true,  // Make the tween reverse after reaching the end
            repeat: -1  // Repeat the tween indefinitely
        });
//snail
        let snail = this.add.image(960, 540, 'snail');
        this.tweens.add({
            targets: snail,
            y: 700,  // End position of the text
            duration: 2000,  // Duration of the tween in milliseconds
            ease: 'Bounce',  // Bounce easing function
            yoyo: true,  // Make the tween reverse after reaching the end
            repeat: -1  // Repeat the tween indefinitely
        });
//roly
        let roly = this.add.image(1260, 540, 'roly');
        this.tweens.add({
            targets: roly,
            y: 700,  // End position of the text
            duration: 2000,  // Duration of the tween in milliseconds
            ease: 'Bounce',  // Bounce easing function
            yoyo: true,  // Make the tween reverse after reaching the end
            repeat: -1  // Repeat the tween indefinitely
        });

//ending transition
        this.add.text(725,850, "Tap/Click anywhere to begin.").setFontSize(30).setFill('#f0000f');
        this.add.text(825,950, "Press X to jump").setFontSize(30);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('outro'));
        });
    }
}