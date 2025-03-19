const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the size of the array: ", (size) => {
    size = parseInt(size);
    let arr = [];
    
    function getElements(index) {
        if (index < size) {
            rl.question(`Enter element ${index + 1}: `, (element) => {
                arr.push(element);
                getElements(index + 1);
            });
        } else {
            console.log("The array is:", arr);
            let bikes = ['Gt', 'Honda', 'Yamaha', 'Suzuki', 'Kawasaki'];
            bikes.forEach((bike, index) => {
                console.log(`${index}: ${bike} is a bike`);
            });
            rl.close();
        }
    }
    
    getElements(0);
});
