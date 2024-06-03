let cuurent_users = ["Usman", "Ali", "Areeba", "Zain", "Osama"]
let new_users = ["Hamza", "Ayesha", "ali", "Fahad", "Areeba"]
new_users.forEach(new_users_name => {
    let our_conddition = (cuurent_users.some(cuurent_users_name => cuurent_users_name.toLowerCase() === new_users_name.toLowerCase()))
    if (our_conddition) {
        console.log(`Sorry ${new_users_name} is already taken`);

    } else {
        console.log(`this username ${new_users_name} is available`);

    }

})