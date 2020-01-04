function myValidation() {
    let myValue = document.getElementById('myForm').value;
    console.log(myValue);

    /* let myValue = document.querySelector('#myForm').addEventListener('input', (event) => {
        event.target.value;
    })
    console.log(myValue);  doesnot work for me*/

    if (isNaN(myValue) || myValue < 1 || myValue > 20) {
        console.log('not a valid input');
        /* const myPara = document.createElement('#idOne');
        myPara.textContent = 'assignment!!'; */
        const myEle = document.querySelector('p');
        myEle.textContent= 'I am being changed using js!'
    } else {
        console.log('this input is ok!!');
    }
    
    }
    // form validation
    document.querySelector('.myform').addEventListener('submit', (event) => {
        event.preventDefault()
        console.log(event.target.username.value);
        console.log(event.target.realname.value);
        event.target.username.value='';
        event.target.realname.value='';
        
    })