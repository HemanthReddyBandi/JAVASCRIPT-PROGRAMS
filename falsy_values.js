
const falsyValues = [false, 0, "", null, undefined, NaN];
falsyValues.forEach(value => {
    if (value) {
        console.log(`${value} is truthy`);
    } else {
        console.log(`${value} is falsy`);
    }
});

const exampleValue = 0;

if (exampleValue) {
    console.log("This is truthy");
} else {
    console.log("This is falsy");
}