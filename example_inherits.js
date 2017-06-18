var util = require('util');

// родитель
function Animal(name) {
    this.name = name;
}
Animal.prototype.walk = function() {
    console.log('... ходит: ' + this.name);
}

// потомок
function Rabbit(name) {
    this.name = name;
}
util.inherits(Rabbit, Animal);

Rabbit.prototype.jump = function() {
    console.log('... прыгает: ' + this.name);
}

// использование
var rabbit = new Rabbit('наш кролик');
rabbit.walk();
rabbit.jump();