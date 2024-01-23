class MainMenu extends Phaser.Scene {
    constructor(){
        super('mainmenuScene')
        console.log('MainMenu: constructor')
    }

    init(){
        console.log('MainMenu: init')
        this.HP = 100
        this.EXP = 0
        console.log(`HP: ${this.HP} EXP: ${this.EXP}`)
    }

    preload(){
        console.log('MainMenu" preload')
        this.load.path = './assets/img/' //goes to path shown
        this.load.image('tomato','tomato.png') //so don't need to rewrite path again
    }

    create(){
        console.log('MainMenu: create')
        let playerStats = {
            HP: this.HP,
            EXP: this.EXP
        }
        this.scene.start('playScene', playerStats) //pass information through as additional parameter
    }
}

