"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//   Q NO 37 //
function make_shirt(size = "large", printMessage = "I love typescript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
// calling a default parameter //
make_shirt();
// giving a argument //
make_shirt("Medium");
// changing  a argument //
make_shirt("small", "I love typescript");
// Q NO 38 //
function describe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
describe_city("karachi");
describe_city("lahore");
describe_city("Tokyo", "japan");
// Q NO 39 //
function city_country(city, country) {
    return `${city},${country}`;
}
let result = city_country("karachi", "pakistan");
let result1 = city_country("tokyo", "japan");
let result2 = city_country("berlin", "germany");
console.log(result);
console.log(result1);
console.log(result2);
