console.log('hi!!!')

//// JavaScript Objects - Object Methods ----------------------------------------------------

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       return this.firstName + " " + this.lastName;
//     }
//   };

//  //console.log(person);

//  hisName = person.fullName();

//  console.log(hisName);

 //// JavaScript Classes --------------------------------------------------------------------

class Car {

    constructor(carName, year){

        this.carName = carName;
        this.year = year;
    }
 }

 // The example above creates a class named "Car". The class has two initial properties: "carName" and "year"

 // creaing objects 

 const myCar1 = new Car('Ford', 2012);
 const myCar2 = new Car('Beetle', 2009);

 console.log(myCar1.carName);