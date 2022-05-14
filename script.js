//Topics to cover
//Introduction to Conditionals and Pseudocode

    const bananasCount = 5;
    const applesCount = 10;
    if (bananasCount > applesCount) {
     //   console.log("we have more apples than bananas")
    }
    else {
    //    console.log("we have more bananas than apples")
    }

    // create a conditional that checks if a person is an adult and allowed to attend a party
    // create two variables isAdult and isAttendingParty
    // if both are true welcome them to the party
    // if they are not adult, print they are not old enough

    let isAdult = false;
    let isAttendingParty = false;

    if (isAdult && isAttendingParty) {
        console.log("welcome to the party!")
    }
    else if (isAdult === false && isAttendingParty === true)
        console.log("you are not old enough")
    else if (isAttendingParty === false && isAdult ===true) {
        console.log("you are not invited to the party")
    }
    else {
      //  console.log("you are not attending the party and not old enough")
    }
    
// create an algorithmic stable coin system
// create two variables stableCoin and volatileCoin
// if stableCoin < 1, print more VolatileCoin
// if stableCoin > 1, burn more VolatileCoin

var stableCoin = 1;
var volatileCoin = 20;

if (stableCoin < 1 && volatileCoin === 20) {
    console.log("print more volatileCoin")
}
else if (stableCoin > 1 && volatileCoin === 20) {
    console.log("burn more volatileCoin")
}
else  {
    console.log("everything is working fine")
}

// Use || as well as &&
// more than, less than operators for numbers
// boolean conditionals
// ternary operators
// switch statements
