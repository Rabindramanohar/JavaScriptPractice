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

var ul = document.getElementById('list');
var li;

let addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

let removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

// Assignment
let removeAllButton = document.getElementById('removeAll');
removeAllButton.addEventListener('click', removeAllItem);

function addItem() {
    //console.log('Add button clicked!');
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if (item === '') {
        //return false;
        // add p tag and assign a value of 'enter you todo'
        var para = document.createElement('p');
        para.setAttribute('id', 'textEdit');
        
        
        var paraNode = document.createTextNode('Enter your Todo');
        para.appendChild(paraNode);
        ul.appendChild(para);
        //para.value = ''
        

        setTimeout(() => {
            ul.className = 'visual';
        }, 3);
    } else {
        //create li
        li = document.createElement('li');

        //create checkbox
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.setAttribute('id', 'check');

        //create label
        var label = document.createElement('label');
        label.setAttribute('for', 'item');

        // add these elements on web page
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li, ul.childNodes[0]);

        setTimeout(() => {
            li.className = 'visual';
        }, 2);

        input.value = '';

    }
}

function removeItem() {
    console.log('Delete button clicked!');
    li = ul.children
    
    for (let index = 0; index < li.length; index++) {
        /* const element = li[index];
        console.log(element); */
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
        
    }
}

// Assignment
function removeAllItem() {
    li = ul.children;

    for (let index = 0; index < li.length; index++) {
        ul.removeChild(li[index]);
    }
}