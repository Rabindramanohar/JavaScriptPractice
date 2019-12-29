const myTodos = ['Coding', 'Meditation', 'Jogging'];
//console.log(myTodos.indexOf('Coding'));

const newTodos = [ {
    title: 'Coding',
    isDone: false,
}, {
    title: 'Meditation',
    isDone: false,
}, {
    title: 'Jogging',
    isDone: true,
}]

/* const index = newTodos.findIndex(function(todo, index) {
    console.log(todo);
    return todo.title === 'Jogging';
})

console.log(index); */

// Method 1
/* const findTodo = function(anyTodo, title) {
    const index = myTodos.findIndex(function(todo, index) {
        return todo.title.toLowerCase() === title.toLowerCase();
    });
    return anyTodo[index];
}

console.log(findTodo(newTodos, 'coding')); */

// Method 2
const findTodo = function(_anyTodo, title) {
    const titleReturned = myTodos.find(function(todo, _index) {
        return todo.title.toLowerCase() === title.toLowerCase();
    })
    return titleReturned;
}

let printStuff = findTodo(myTodos, 'coding')
console.log(printStuff);
