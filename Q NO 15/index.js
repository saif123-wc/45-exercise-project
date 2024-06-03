var guestList = ["saif", "saeed", "hamza", "najeeb"];
var dontcome = guestList[0];
console.log(dontcome, 'did not make the dinner');
guestList.splice(0, 1, "AMIR");
guestList.forEach(function (newINV) { return console.log("SALAM,".concat(newINV, " would you like to ginner with me")); });
