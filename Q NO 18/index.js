var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countryTovisit = ["Dubai", "China", "Brazil", "Argentina"];
console.log("original Order:", countryTovisit);
console.log("alphbatic Order:", __spreadArray([], countryTovisit, true).sort());
console.log("Still in original order:", countryTovisit);
console.log("Reverse Order:", __spreadArray([], countryTovisit, true).reverse());
console.log("Still in original order:", countryTovisit);
console.log("Original array Reversed:", countryTovisit.reverse());
console.log("Back to original order:", countryTovisit.reverse());
console.log("Sorted in Alphabatic order", countryTovisit.sort());
console.log("Original array reversed again:", countryTovisit.reverse());
