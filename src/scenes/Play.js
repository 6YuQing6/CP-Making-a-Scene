class Play extends Phaser.Scene {
    constructor(){
        super('playScene')
        console.log('Play: constructor')
    }

    init(stats){ //grabs information by giving parameter a name
        console.log('Play: init')
        this.HP = stats.HP
        this.EXP = stats.EXP
    }

    create(){
        console.log('Play: create')
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`)

        //can add scenes without declaring them in main with scene.add(name,scene), but scene needs to be declared before play
        this.scene.add('statsoverlayScene', StatsOverlay, false) 
        this.scene.launch('statsoverlayScene') //starts scene without killing play

        // (x, y, name of thing) //top left is (0,0), bottom right is (x,y)
        this.add.image(0,0,'tomato').setOrigin(0,0).setScale(5) //original origin is (0.5,0.5)
        this.tomato = this.add.sprite(300,300,'tomato').setScale(2) //if adding sprite has more properties that can be altered
    }

    update(){
        //console.log('Play: update')
        this.tomato.angle++
    }


}