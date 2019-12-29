let myTodo = {
    day: 'Monday',
    meeting: 0,
    meetingDone: 0
}

let addMeeting = function(todo, meet=0) {
    todo.meeting = todo.meeting + meet;
}

let meetingDone = function(todo, meet=0)  {
    todo.meetingDone = todo.meetingDone - meet;
}

let resetDay = function(todo) {
    todo.meeting = 0;
    todo.meetingDone = 0;
}

let daySummary = function(todo) {
    let meetingLeft = todo.meeting + todo.meetingDone;
    return `You have ${meetingLeft} meetings today!`
}

addMeeting(myTodo, 4);

addMeeting(myTodo, 3);

meetingDone(myTodo, 7);

console.log(daySummary(myTodo));
