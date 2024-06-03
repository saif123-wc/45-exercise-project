let numbers =[1,2,3,4,5,6,7,8,9];
// using for loop //
for (let loopNumbers of numbers){
    let ordinalEnding :string

    if (loopNumbers === 1) {
        ordinalEnding = "st"       
    }
    else if (loopNumbers === 2){
        ordinalEnding = "nd"
    }
    else if (loopNumbers === 3){
        ordinalEnding = "rd"
    }
    else {
         ordinalEnding = "th"
    }
    console.log(`${loopNumbers}${ordinalEnding}`);
    
   
   
   

}



