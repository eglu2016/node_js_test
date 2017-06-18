var log = require('./logger')(module);
var User = require('./user/user');
var db = require('./db/db');
//........................................
function run() {
    var vasya = new User('Вася');
    var petya = new User('Петя');
    vasya.hello(petya);
}

log(db.getPhrase('Run succeful'));

if(module.parent) {
    exports.run = run;
} else {
    run();
}