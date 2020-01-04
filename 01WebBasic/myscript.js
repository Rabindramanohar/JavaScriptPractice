//console.log(document.getElementById('idOne'));
/* const myFav = document.querySelectorAll('p');
console.log(myFav); */

/* const myEle = document.querySelector('p');
myEle.textContent= 'I am being changed using js!' */

const myEle = document.querySelectorAll('p');

myEle.forEach((ele) => {
    ele.textContent = 'I am being changed by loop in js!!';
    /* ele.remove(); */
});

const myPara = document.createElement('p')
myPara.textContent = 'I was selected by js!';

document.querySelector('body').appendChild(myPara);

document.querySelector('button').addEventListener('click', (event) => {
    //console.log('button was clicked!!');
    event.target.textContent= 'I was clicked by  event listner!!'
})

// track input form
document.querySelector('#myForm').addEventListener('input', (event) => {
    console.log(event.target.value);
    
})