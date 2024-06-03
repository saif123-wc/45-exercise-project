var cuurent_users = ["Usman", "Ali", "Areeba", "Zain", "Osama"];
var new_users = ["Hamza", "Ayesha", "ali", "Fahad", "Areeba"];
new_users.forEach(function (new_users_name) {
    var our_conddition = (cuurent_users.some(function (cuurent_users_name) { return cuurent_users_name.toLowerCase() === new_users_name.toLowerCase(); }));
    if (our_conddition) {
        console.log("Sorry ".concat(new_users_name, " is already taken"));
    }
    else {
        console.log("this username ".concat(new_users_name, " is available"));
    }
});
