

/*
function sayHello(){
    console.log("-------------------------------");
    console.log("Hello");
    console.log("-------------------------------");
}
let a=sayHello;
a();
a();
a();
a();
a();
*/
/*function sayHello(name){
    console.log("-------------------------------");
    console.log('Hello'  + name + "!");
    console.log("-------------------------------");
}

sayHello('Sam');

sayHello('ram');
sayHello('Hari');
sayHello('Ramesh');
*/

function taxCalculation(amount){
    let result=amount*0.82;
    return result;
}
let tax=taxCalculation(100);
console.log(tax);
