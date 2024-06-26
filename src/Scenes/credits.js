class Credits extends Phaser.Scene {
    constructor() {
        super("endCredits");
    }
    init (endingStats)
    {
        this.deathCount = endingStats.deaths;
        this.endTime = endingStats.time;
    }
    preload() {
        this.load.setPath("./assets/");
        this.load.image("credits", "credits.png");
        this.load.bitmapFont('publicPixel', 'publicPixel_0.png', 'publicPixel.fnt');
    }
    create() {
        this.add.image(500, 300, "credits");

        this.deathText = this.add.bitmapText(485, 150, "publicPixel",
        `Deaths: ${this.deathCount}`, 30).setOrigin(0.5);

        this.timerString = this.formatTime(this.endTime);
        this.timeText = this.add.bitmapText(20, 10, "publicPixel", `${this.timerString}`, 16).setOrigin(0);

        this.restart = this.input.keyboard.addKey("R");
    }
    update() {
        if (Phaser.Input.Keyboard.JustDown(this.restart)) {
            this.scene.start("title");
        }
    }

    // thank you friendo jyh <3
    formatTime(milliseconds) {
        let minutes = Math.floor(milliseconds / 60000);
        let seconds = Math.floor((milliseconds % 60000) / 1000);
        let millis = milliseconds % 1000;
    
        // Add leading zeros if necessary
        let formattedMinutes = minutes.toString().padStart(2, '0');
        let formattedSeconds = seconds.toString().padStart(2, '0');
        let formattedMillis = millis.toString().padStart(3, '0');
    
        return `${formattedMinutes}:${formattedSeconds}:${formattedMillis}`;
    }
}