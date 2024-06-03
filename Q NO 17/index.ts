// Q NO 17 //
let guestList = ["saif", "hamza", "saeed", "usama"];
let dontCome = guestList[0];
console.log(dontCome, "he is not coming");
guestList.splice(0, 1, "amir");
console.log("Good news! we have fo0und a bigger table for dinner");
// adding a new  guest in the start of index //
guestList.unshift("ALI");

// adding a new guest at the end //
guestList.push("ZAIN");

// adding a new guest in the middle of array //
let middleIndex: number = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "osama");
console.log("updated list of our guests");
guestList.forEach(allGuest => console.log(`Salam ${allGuest} would you like to dinner with me`));

// Inform that only two guest can be invited for dinner //
console.log("unfortynately,the dinner table would't arrive on time,so i can only invite two guest to dinner with me");

// using while loop to remove guest //
while (guestList.length > 2) {
    let reomveGuest = guestList.pop();
    console.log(`Sorry,${reomveGuest} i can't invite to you dinner with me`);
}
// sending invitation to last two guest //
console.log("invitation to last two guests");
guestList.forEach(lastGuests => console.log(`luckly,${lastGuests} you are invited to dinner`));

// removing last two guest //
guestList.pop();
guestList.pop();
console.log("Empty list: guestlist");























