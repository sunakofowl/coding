const Kelvin = 293  // Kelvin is a constant representing the temperature in Kelvin
const Celsius = Kelvin - 273  // Convert Kelvin to Celsius
var Fahrenheit = Math.floor(Celsius * 9/5 + 32)  // Convert Celsius to Fahrenheit
console.log(`The temperature in Fahrenheit is ${Fahrenheit}°F`);  // Output the temperature in Fahrenheit