let userEmail = 'jfkdjfkdf123kfjkd';
let password = 'kfkdfj123fjdk';

let userChecker =  function(email) {
    if((email.includes(123)) && (email.length > 6))
    return true;

    return false;
}

let userPassword = function(pass) {
    if((email.includes(123)) && (email.length > 6))
    return true;

    return false;
}

console.log(userChecker(userEmail));
console.log(userChecker(password));
