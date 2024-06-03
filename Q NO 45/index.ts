function create_car (manufacture:string,modal,...options){
    let car={
        manufacture : manufacture,
        modal : modal,
    
    }
    options.forEach(option =>{
        let [key,value]=option.split(":")
        car[key.trim()]
    })
return car;

}
let my_car = create_car("toyota","corolla","color : black");
console.log(my_car);

