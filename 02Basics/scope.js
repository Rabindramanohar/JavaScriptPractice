let iAmGlobal = 'someValue';

if(true) {
    var iAmLocal = 'someMoreValue';
    iAmGlobal = 'valuedChanged';
    console.log(iAmLocal);
    console.log(iAmGlobal);
}

console.log(iAmLocal);
console.log(iAmGlobal);

