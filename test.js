// Import the function sum from the app.js file
const { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 153.79 yen", function() {
    const yen = fromDollarToYen(3.5);
    const expected = 3.5 * 153.79; 
    expect(fromDollarToYen(3.5)).toBe(538.265);
})

test("One yen should be 0.0051 pounds", function() {
    const yen = fromYenToPound(1000);
    const expected = 1000 * 0.0051; 
    expect(fromYenToPound(1000)).toBeCloseTo(5.1, 5);
})