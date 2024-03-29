function feetToMeter (feet) {
    return feet * 0.3048;
}
function metersToFeet (meters){
    return meters * 3.28084;
}
function milesToKm (miles){
    return miles * 1.60934;
}
function kmToMiles (km) {
    return km * 0.621371;
 }
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

exports.calculateDistance = (req, res) => {
    const { unit, value } = req.query;
    const result = calculate(unit, value);
    if (result === 'Invalid unit') {
        return res.status(400).send(result);
    }
    res.status(200).send(result.toString());
};