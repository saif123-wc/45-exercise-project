function create_car(manufacture, modal) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacture: manufacture,
        modal: modal,
    };
    options.forEach(function (option) {
        var _a = option.split(":"), key = _a[0], value = _a[1];
        car[key.trim()];
    });
    return car;
}
var my_car = create_car("toyota", "coolla", "color : black");
console.log(my_car);
