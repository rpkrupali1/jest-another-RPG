const Enemy = require("./Enemy");
const Player = require("./Player");
const inquirer = require('inquirer');

function Game(){
    this.roundNumber = 0;
    this.isPlayerTurn = false;
    this.enemies = [];
    this.Player;
};

Game.prototype.initializeGame = function(){
    this.enemies.push(new Enemy('Goblin','Sword'));
    this.enemies.push(new Enemy('orc', 'baseball bat'));
    this.enemies.push(new Enemy('skeleton', 'axe'));
    this.currentEnemy = this.enemies[0];

    inquirer
    .prompt({
        type: 'text',
        name: 'name',
        message: 'what is your name?'
    })
    .then(({name}) => {
        this.Player = new Player(name);
        console.log(this.currentEnemy,this.Player);
        this.startNewBattle();
    })
};

module.exports = Game;