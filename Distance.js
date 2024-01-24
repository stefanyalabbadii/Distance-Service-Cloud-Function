// function 1

function feetToMeter (feet) {
    return feet * 0.3048;
}

//function 2
function metersToFeet (meters){
    return meters * 3.28084;
}

// function 3
function milesToKm (miles){
    return miles * 1.60934;
}
//function 4
function kmToMiles (km) {
    return km * 0.621371;
 }
//function 5 calculate
function calculate(unit, value) {
    switch (unit) {
        case 'feet':
            return feetToMeter(value);
        case 'meters':
            return metersToFeet(value);
        case 'miles':
            return milesToKm(value);
        case 'km':
            return kmToMiles(value);
        default:
            return 'Invalid unit';
    }
}

// Export the calculate function
module.exports = calculate;