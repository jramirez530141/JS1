const massMarco = 78;
const heightMarco = 1.69;
const massAce = 92;
const heightAce = 1.95;

const BMIMarco = massMarco / (heightMarco * heightMarco);
const BMIAce = massAce / (heightAce * heightAce);
console.log(BMIMarco, BMIAce);

const addition = (x,y) => {
    return x + y;
}


if(BMIMarco > BMIAce){
    console.log("Marco's BMI  is higher than Ace");
}
else{
    console.log("Ace's BMI is higher than Marco")
}

if(BMIMarco > BMIAce){
    console.log("Marco's BMI ("+ BMIMarco+") is higher than Ace ("+ BMIAce+")");
}
else{
    console.log("Ace's BMI", BMIAce, "is higher than Marco", BMIMarco);
}
