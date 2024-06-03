          // Q NO 16 //
let guestList = ["saif", "hamza", "saeed", "usama"];
let dontCome = guestList[0];
console.log(dontCome, "he is not coming");
guestList.splice(0, 1, "amir");
console.log("Good news! we have fo0und a bigger table for dinner");
// adding a new  guest in the start of index //
guestList.unshift("ALI");
// adding a new guest at the end //
guestList.push("ZAIN");
let middleIndex : number =Math.floor(guestList.length/2);
guestList.splice(middleIndex,0,"osama");
console.log("updated list of our guests");

guestList.forEach(allGuest => console.log(`Salam ${allGuest} would you like to dinner with me`));



           















