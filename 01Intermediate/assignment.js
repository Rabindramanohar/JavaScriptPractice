let marks = function(currMarks, totalMarks) {
    let percentage = (currMarks/totalMarks)*100;
    return percentage;
}

let result = marks(97, 100)

if(result >= 90 && result <= 100) {
    console.log('Grade: A');
} else if(result >= 80 && result <= 90) {
    console.log('Grade: B');
} else if(result >= 70 && result <= 80) {
    console.log('Grade: C');
} else {
    console.log('Fail');
    
}
