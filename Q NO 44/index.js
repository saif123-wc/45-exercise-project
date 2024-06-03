function makin_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nINCLUDING THE MORE ITEMS IN THE SANDWICH\n");
    items.forEach(function (singleItem) { return console.log(singleItem); });
}
makin_sandwich("chicken", "egg", "masala");
makin_sandwich("bread", "butter");
makin_sandwich("tomato", "bread", "egg", "cheese");
