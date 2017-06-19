var util = require('util');
//..............................................................
// message
// name
// stack 
function PhraseError(message) {
    this.message = message;
    Error.captureStackTrace(this, PhraseError);
}
util.inherits(PhraseError, Error);
PhraseError.prototype.name = "PhraseError";
//..............................................................
function HttpError(status, message) {
    this.status = static;
    this.message = message;
    Error.captureStackTrace(this, HttpError);
}
util.inherits(HttpError, Error);
HttpError.prototype.name = 'HttpError';
//..............................................................
var phrases = {
    "Hello": "Привет",
    "world": "Мир"
}
function getPhrase(name) {
    if (!phrases[name]) {
        throw new PhraseError('Нет такой фразы: '+ name);
    }
    return phrases[name];
}
function makeUrl(url) {
    if (url != 'index.html') {
        throw new HttpError(404, 'Нет такой страницы ...');
    }
    return util.format('%s, %s!', getPhrase('Hell'), getPhrase('world'));
}

try {
    var page = makeUrl('index.html');
    console.log(page);
} catch (e) {
    if (e instanceof HttpError) {
    console.log(e.status, e.message);
} else {
    console.error(' > ошибка: %s\n > cooбщение: %s\n > стек: %s\n', e.name, e.message, e.stack);
}
}
