var userName = ["danish", "nizam", "saeed", "admin", "saif"];
userName = [];
if (userName.length === 0) {
    console.log("Your array is empty,We need to find some users!");
}
else {
    userName.forEach(function (oneUser) {
        if (oneUser == "admin") {
            console.log("hello ".concat(oneUser, ",would you like to see a status report?"));
        }
        else {
            console.log("Hello ".concat(oneUser, ",thank you for logging in again."));
        }
    });
}
