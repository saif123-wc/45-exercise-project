function show_magicians(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
function make_great(magician) {
    return magician.map(function (name) { return "the great ".concat(name); });
}
var great_magicians = ["saif", "saeed", "nizam", "saad"];
var magician_names = make_great(great_magicians);
show_magicians(magician_names);
