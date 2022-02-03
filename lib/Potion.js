class Potion{
    constructor(name){
        this.types = ['health','strength','agility'];
        this.name = name || this.types[Math.floor(Math.random() * this.types.length)];;
        this.value = this.name === 'health' ? Math.floor(Math.random() * 10 + 30) : Math.floor(Math.random()* 5 + 7);
    }
}
module.exports = Potion;