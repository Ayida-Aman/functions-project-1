function calculateTotal(...prices){
    let total=0;
    for (let price of prices)
        total+=price;
    return total;
}
let userInput= prompt('put the prices')
let input = userInput.split(',').map(Number);
alert(calculateTotal(...input));