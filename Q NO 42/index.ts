function show_magicians (magician: string[]){
    magician.forEach(name =>console.log(name));   
}

function make_great (magician:string[]){
   return magician.map(name =>`the great ${name}`)
}

let great_magicians =["saif","saeed","nizam","saad"];

let magician_names = make_great(great_magicians);

show_magicians(magician_names)

