function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "the great ".concat(name); });
}
var great_magicians = ["saif", "saeed", "nizam", "saad"];
var copy_magicians_names = great_magicians.slice();
var copy_great_magicians = make_great(copy_magicians_names);
console.log("\nORIGINAL ARRAY\n");
show_magicians(great_magicians);
console.log("\nCOPIED ARRAY\n");
show_magicians(copy_great_magicians);
