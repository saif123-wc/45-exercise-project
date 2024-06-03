// Q NO 17 //
var guestList = ["saif", "hamza", "saeed", "usama"];
var dontCome = guestList[0];
console.log(dontCome, "he is not coming");
guestList.splice(0, 1, "amir");
console.log("Good news! we have fo0und a bigger table for dinner");
// adding a new  guest in the start of index //
guestList.unshift("ALI");
// adding a new guest at the end //
guestList.push("ZAIN");
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "osama");
console.log("updated list of our guests");
guestList.forEach(function (allGuest) { return console.log("Salam ".concat(allGuest, " would you like to dinner with me")); });
console.log("unfortynately,the dinner table would't arrive on time,so i can only invite two guest to dinner with me");
while (guestList.length > 2) {
    var reomveGuest = guestList.pop();
    console.log("Sorry,".concat(reomveGuest, " i can't invite to you dinner with me"));
}
console.log("invitation to last two guests");
guestList.forEach(function (lastGuests) { return console.log("luckly,".concat(lastGuests, " you are invited to dinner")); });
guestList.pop();
guestList.pop();
console.log("Empty list: guestlist");
