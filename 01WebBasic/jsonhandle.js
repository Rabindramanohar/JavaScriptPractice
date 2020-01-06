const student = {
    name: 'John',
    age: 23,
    isActive: true
}

// convert this object into to string to stored in local storage
let studentObj = JSON.stringify(student);
console.log(typeof studentObj);

//localStorage.setItem('student', studentObj);

let backToJson = JSON.parse(studentObj);
console.log(backToJson.age);
console.log(typeof backToJson);


