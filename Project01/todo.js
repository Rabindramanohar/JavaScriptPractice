/* var h = document.createElement('h1');
var myValue = document.createTextNode('Robin');
h.appendChild(myValue);
document.querySelector('h1').appendChild(h); */

// while loop
/* let val = 5;
while (val > 0) {
    console.log(val);
    val--;
} */

// working on todoList
let addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

let removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem)










function addItem() {
    console.log('Add button clicked!');
}

function removeItem() {
    console.log('Delete button clicked!');
}