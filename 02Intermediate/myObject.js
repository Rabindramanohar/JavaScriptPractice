let lifeGoals = {
    currentGoal: 'Become a full-stack developer',
    dreamCompany: 'Google',
    longTermGoal: 'Become a Data Sciencetist and start my own company which will help farmers for better living',
    currentProcess: 'Learning Angular and Node',
    effortPutting: 'Giving only 40% of my potential',
    becomeExpert: 'Now onwards I am giving my 100% to achieve my goals in life',
    physicalHealth: 'I have to be concious about it',
    mentalHealth: 'Started doing Vipassana every single',
    author: 'Robin',
    effortInHours: 15
}

//console.log(lifeGoals);

//console.log(`${lifeGoals.author} your current goal is ${lifeGoals.currentGoal} and you are putting effort like ${lifeGoals.effortPutting} to become a expert you have to put ${lifeGoals.becomeExpert}`);

let changeEffortHours = function(myObect) {
    /* return `Required effective hours you need to put here is ${lifeGoals.effortInHours +3}` */
    return {
        effectiveFormatOne: `Required effective hours you need to put here is ${lifeGoals.effortInHours +2}`,
        effectiveFormatTwo: `Required effective hours you need to put here is ${lifeGoals.effortInHours +3}`,
    }
}

//console.log(changeEffortHours(lifeGoals));
let handlingReturnedObject = changeEffortHours(lifeGoals);

console.log(handlingReturnedObject.effectiveFormatTwo);

