let  userName =["danish","nizam","saeed","admin","saif"];
userName.forEach(oneUser => {
    if (oneUser == "admin") {
        console.log(`hello ${oneUser},would you like to see a status report?`);              
    }
    else{
        console.log(`Hello ${oneUser},thank you for logging in again.`);
        
    }
})