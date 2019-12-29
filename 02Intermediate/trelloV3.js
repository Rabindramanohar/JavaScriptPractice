let myTodo = {
    day: 'Monday',
    meeting: 0,
    meetingDone: 0,
    
    addMeeting: function(num) {
        this.meeting = this.meeting + num;
    },

    meetingDone: function(num) {
        this.meetingDone = this.meetingDone + num;
    },

    meetingSummary: function() {
        return `You have total ${this.meeting + this.meetingDone} is left today!`
        //return `You have total ${this.meeting} is left today!`;
    }

}

myTodo.addMeeting(5);

myTodo.meetingDone(4);


console.log(myTodo.meetingSummary());
