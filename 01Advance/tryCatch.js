const currencyConverter = (dollar) => {
    if (dollar === 'number') {
        return dollar * 70;
    } else {
        throw Error('Amount needs to be in number only.');
    }
}

//console.log(currencyConverter(5));

try {
    const res = currencyConverter(5)
    console.log(res);
} catch (error) {
    console.log(error.message);
    
}

console.log('program gana crash and this line will not print!!');
