let sayHello = function(name) {
    console.log('Hello first function!');
    console.log(`preety cool!! ${name}`);
}

sayHello('Jhone');

let fullNameMakers = function(firstName, lastName) {
    console.log("Hey! welcome buddy.");
    console.log(`Great to you here Mr. ${firstName} ${lastName}`)
}

fullNameMakers('Jhone', 'Doe')

let addNum = function(num1, num2) {
    let result = num1+num2;
    return result;
}

let res = addNum(3, 5);
console.log(res);

let Multiplyer = function(num1, num2) {
    return num1*num2;
}

let mulRes = Multiplyer(3, 5);
console.log('Multiplayer result: '+mulRes);

// default function parameters
let getUsers = function(name='unName', count=0) {
    return 'Hello '+name+'you course count is: '+count;
}

console.log(getUsers('robin', 2));
