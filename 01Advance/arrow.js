/* const sayHello = (name) =>  `hey there ${name} !`

console.log(sayHello('Robin')); */

const todos = [ {
    title: 'Coding',
    isDone: false,
}, {
    title: 'Meditation',
    isDone: false,
}, {
    title: 'Jogging',
    isDone: true,
}]

const thingsDone = todos.filter((todo) => {
    let res = todo.isDone === false
    console.log(todo.title);
    return res;
    
});

//console.log(thingsDone);

const cap = {
    price: 500,
    weight: 100,
    myDes: function() {
        return `Price of the cap ${this.price}`
    }
}

console.log(cap.myDes());
