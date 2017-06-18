var db = require('../db/db');
db.connect();

function User(name) {
    this.name = name;
}
User.prototype.hello = function(who) {
    console.log(db.getPhrase('Hello') + ', ' + who.name);
};

// чтоб класс был доступен в других модулях
// exports.User = User;
module.exports = User; 
//console.log(module);