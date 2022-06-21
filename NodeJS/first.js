let username = "Ankita"
console.log(username)
const being = "human"
console.log(`\v${being}`)   /*string formating*/

// for bigger numbers _ can be used inbetween to make the number more readable
// let sum = 10000000
// instead
// let sum = 1_00_00_000
// instead of comas _ can be used for a bigger number

//big int ends with n and big int will only get added to big int

//Type conversion and Type Coercion
//  Conversion
let num = Number("123")    /*string to number */
let pincode = String(560017)   /*number to string */
//  Coercion: when a number and a string is to be concatinated or are to be added then the js engg will convert the variables accordingly and performs the operation
let x
x = 8
x = x + ""
console.log(typeof x)
x = x - 2   /*when substracting the js engg will take the string value as number*/
console.log(typeof x)
x = + x + 2 /*when using + operator as this operator is used for concatination as well so an extra + is to be added before the string variable to tell the compiler that the value is to be converted to number */
console.log(typeof x)

// Parse int is used to convert the numbers in a string to number to be used as number, ex:
let pin = "1234 abcd"
sum = 1 + parseInt(pin)
console.log(sum) /*this will give 12345 */

//Increament operators are used in js

//to comparision === is used that is because the == comparision will make the compiler to perform coercion

// ternary operator in js is like <statement_in_question?option_if_statemt_is_true:option_if_statement_is_false>

// Switch case: when the options are many and the solution depends on the option chosen
let day = "monday"
switch (day) {
    case "Monday":
        console.log("Monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    default:
        console.log("system is not configured for anything other than monday and tuesday")

}

//Template Literal is string in python
age = 28
console.log(`my age is ${age}`)

// OOP 
// object in jc is similar to dictionary in pyhton
let developer = {
    name: "Ankita",
    tech: "Python",
    'work exp': 1
}
index_pos = 'name'
console.log(developer)  //this gives the whole object
console.log(developer.tech) //this gives the tech element of the object
console.log(developer[index_pos]) //this gives the element which is in position index_pos


// complex object
let programer = {
    name: "Ankita",
    tech: "Python",
    laptop: {
        cpu: "i5",
        ram: 8,
        brand: "Dell",
    }
}

console.log(programer.laptop.cpu)
console.log(programer.laptop.brand.length) //length gives the length of the variable or element
console.log(programer.laptop.brand1?.length) //the ? is used to check if the property/variable is present or not
//delete keyword is used to delete the variable or element
delete programer.laptop.brand //this will delete the brand name of the laptop


//for in loop: this is to loop through the elements of the objects 
for (let key in programer) {
    console.log(key)
    if (key == "laptop") {
        for (let i in programer[key]) {
            console.log(programer[key][i])
        }
    }
}

//Function expression
let write = function (name) {
    return `Hi ${name}`
}

console.log(write("Ankita"))

//Arrow function: the keyword function gets eleminated by 
let 