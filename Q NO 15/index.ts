   // Q NO 15 //
let guestList = ["saif", "saeed", "hamza", "najeeb"]
let dontcome = guestList[0];
console.log(dontcome, 'did not make the dinner');
guestList.splice(0, 1, "AMIR");
guestList.forEach(newINV => console.log(`SALAM,${newINV} would you like to ginner with me`));


