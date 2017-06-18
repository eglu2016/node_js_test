
var util = require('util');
//.........................................................
var obj = {
    a: 5,
    b: 6,
    inspect: function() {
        return '111';
    }
};
obj.self = obj;
console.log(util.inspect(obj));
//.........................................................
var str = util.format('мой формат: %s, %d, %j', 'string', 123, {test: "obj1"});
console.log(str);