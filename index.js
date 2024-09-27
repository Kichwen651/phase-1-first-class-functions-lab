// Code your solution in this file!
// Function to return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

// Function to return the last two drivers
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
};
// Function to return the first two drivers
const returnFirstTwoDriver = function(drivers) {
    return drivers.slice(0, 2);
};

// Function to return the last two drivers
const returnLastTwoDriver = function(drivers) {
    return drivers.slice(-2);
};

// Array of driver selection functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to select drivers based on the provided callback function
function selectDifferentDrivers(drivers, callback) {
    return callback(drivers);
}

// Example usage:
const drivers = ['Alice', 'Bob', 'Charlie', 'David'];

// Invoking the first function from the array
const firstTwo = selectDifferentDrivers(drivers, selectingDrivers[0]);
console.log(firstTwo); // Outputs: ['Alice', 'Bob']

// Invoking the last function from the array
const lastTwo = selectDifferentDrivers(drivers, selectingDrivers[1]);
console.log(lastTwo); // Outputs: ['Charlie', 'David']

// Function to create a fare multiplier
function createFareMultiplier(multiplier) {
    // Returns a function that multiplies a given fare by the multiplier
    return function(fare) {
        return fare * multiplier;
    };
}

// Example usage:
const doubleFare = createFareMultiplier(2); // Create a function to double fares
const tripleFare = createFareMultiplier(3); // Create a function to triple fares

const Fare = 20;
const doubledFare = doubleFare(fare); // Should multiply by 2
const tripledFare = tripleFare(fare); // Should multiply by 3

console.log(doubledFare); // Outputs: 40
console.log(tripledFare); // Outputs: 60

// Function to create a fare multiplier
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

// Function to double fares
const fareDoubler = createFareMultiplier(2);

// Example usage:
const fare = 20;
const doubleDFare = fareDoubler(fare); // Should multiply by 2

console.log(doubleDFare); // Outputs: 40

// Function to create a fare multiplier
function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

// Function to triple fares
const fareTripler = createFareMultiplier(3);

// Example usage:
const payment = 20;
const tripledfare = fareTripler(payment); // Should multiply by 3

console.log(tripledfare); // Outputs: 60


