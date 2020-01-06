localStorage.setItem('hero', 'Iron man');
localStorage.setItem('todo', 'coding is my passion');

let todoVar = localStorage.getItem('hero');
console.log(todoVar);
console.log(localStorage.getItem('todo'));

//localStorage.clear();
localStorage.setItem('hero', 'thor');
console.log(localStorage.getItem('hero'));

localStorage.removeItem('hero');
localStorage.getItem('hero');
