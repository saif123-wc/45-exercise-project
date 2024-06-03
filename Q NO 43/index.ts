function show_magicians(magician: string[]) {
    magician.forEach(name => console.log(name));
}

function make_great(magician: string[]) {
    return magician.map(name => `the great ${name}`)
}

let great_magicians = ["saif", "saeed", "nizam", "saad"];

let copy_magicians_names = great_magicians.slice();

let copy_great_magicians = make_great(copy_magicians_names);

console.log("\nORIGINAL ARRAY\n");
show_magicians(great_magicians);

console.log("\nCOPIED ARRAY\n");
show_magicians(copy_great_magicians);