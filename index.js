
// Import the Distance module
const calculate = require('./Distance');

// User input values
const unit = process.argv[2]; // Unit as a command-line argument
const value = parseFloat(process.argv[3]); // Value as a command-line argument, parsed as a float

// Check if unit and value are provided
if (unit && !isNaN(value)) {
    // Call the calculate function with user-provided values
    console.log(`${value} ${unit} is ${calculate(unit, value).toFixed(3)} ${unit === 'feet' || unit === 'meters' ? 'meters' : 'kilometers'}.`);
} else {
    console.log('Please provide valid unit and value.');
}
