

function sayMyName (){
    console.log("Za");
    console.log("h");
    console.log("0");
    console.log("0");
    console.log("r");
     
}


// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }


function addTwoNumbers(number1, number2) {
    // return result
    let result = number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);



function loginUserMessage(username = "zahoor"){
    if(!username){
        console.log("plz enter a username");
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("Zahoor"))
// console.log(loginUserMessage("khan"))


function calculateCartPrice (val1, val2, ...num1) { // ... also called rest and spread operator here  is we use rest operator

    return  num1

}

// console.log(calculateCartPrice(200, 400, 500, 1000));


const user = {
    username: "zahoor",
    prices: 199
}

function handelObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handelObject(user)
handelObject({
    username: "sam",
    price: 399
})




const myNewArray = [200, 300, 400, 209]

function returnSecondValue(getArray){
return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 300, 400, 209]));

