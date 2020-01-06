class User {
    constructor(firstName, lastName, credit) {
        this.firstName = firstName
        this.lastName = lastName
        this.credit = credit
    }

    getFullName() {
        return `${this.firstName} ${this.lastName} is my full name.`
    }

    editName(newName) {
        const myName = newName.split(' ');
        this.firstName = myName[0];
        this.lastName = myName[1];
    }
}

// Inheritance
class Teacher extends User {
    constructor(firstName, lastName, credit, subject) {
        super(firstName, lastName, credit);
        this.subject = subject;
    }

    // method overriding
    getFullName() {
        return `${this.firstName} ${this.lastName} is my full name and teach ${this.subject}`
    }
}

let John = new Teacher('John', 'Anderson', 55, 'Java');
console.log(John.getFullName());
John.editName('Johnny Anderson');
console.log(John.getFullName());
