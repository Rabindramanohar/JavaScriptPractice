// scenario
let isVerified = true;
let isLoggedIn = false;
let hasPaymentTokken = true;
let isGuest = true;

if(isVerified && isLoggedIn && hasPaymentTokken) {
    console.log('Greeting message to the user');
    console.log('Grant access to all the courses!');
} else if(isVerified && isLoggedIn) {
    console.log('Access to free courses');
} else {
    console.log('Please contact to the adim!');
    
}