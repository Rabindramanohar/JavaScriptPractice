const todo = ['Coding', 'Vipassana', 'jogging', 'breakfast', 'bath', 'coding', 'lunch', 'coding', 'walk', 'evening snacks', 'coding', 'dinner', 'coding', 'sleep'];

//forEach loop example in javaScript
/* todo.forEach(function(tasks, index) {
    console.log(`Task priority is: ${index+1} --- ${tasks}`);
}); */

//for loop example
/* for(let i= 0; i< todo.length; i++) {
    console.log(todo[i]);
} */

// array methods
let myTodo = [];

myTodo.push('Coding');
myTodo.push('Medition');
myTodo.push('Lunch');

myTodo.forEach(function(todo, i) {
    console.log(`My most important tasks are ${i+1} -- ${todo}`);
})