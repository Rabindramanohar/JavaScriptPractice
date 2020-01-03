var Jhon = {
    name: 'I am Jhon',
    age: 22,
    isActive: true
}
var Doe = {
    name: 'I am Doe',
    age: 23,
    isActive: false
}
var Robin = {
    name: 'I am Robin',
    age: 24,
    isActive: true
}

let users = new Map();

users.set('Jhon', Jhon);
users.set('Doe', Doe);
users.set('Robin', Robin);

console.log(users.size);

//console.log(users.values());

/* for(const value of users.values()) {
    console.log(value.name);
} */

/* for (const [key, value] of users.entries()) {
    console.log(key + '= '+value.name);
} */

// forEach
users.forEach((value, key) => {
    console.log(`${key} = ${value.name}`);
});

var arrOfArr = [[1, 'one'], [2, 'two'], [3, 'three']];

var newMap = new Map(arrOfArr);

newMap.forEach((value, key) => {
    console.log(`${key} = ${value}`);
});