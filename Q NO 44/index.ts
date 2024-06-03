
function makin_sandwich (...items : string[]){
    console.log("\nINCLUDING THE MORE ITEMS IN THE SANDWICH\n");
    items.forEach(singleItem => console.log(singleItem));
    
}
makin_sandwich("chicken","egg","masala");
makin_sandwich("bread","butter");
makin_sandwich ("tomato","bread","egg","cheese")