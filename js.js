

/*
Minimum.

1. Add 0.1 and 0.2 to get a mathematically correct answer.
2. Add the string "1" and the digit 2 (both operands must be in variables), and get a mathematically correct answer.
3. The user specifies the size of the flash drive in GB. The program should calculate how many files of 820 MB size can be placed on the flash drive.

*/

//__1__//

let a = 0.1;
let b = 0.2;
let c = a + b

console.log(c);

document.getElementsByClassName("unswerC")[0].innerHTML = c.toFixed(2);

//__2__//

let d = "1";
let e = 2;
let f = d + e;

document.getElementsByClassName("unswerMinimum2")[0].innerHTML = f;

//__3__//

let usbSize = document.querySelector('.usb-size__gb-input');
let finalFileSize = document.querySelector(".file-size__gb-input");
let calculateButton = document.querySelector('.calculate-button');

calculateButton.onclick = function () {

    let usbSizeValue = +usbSize.value;
    let finalFileSizeValue = +finalFileSize.value;
    let files = (usbSizeValue * 1000) / finalFileSizeValue;
    document.getElementsByClassName("total-files__input")[0].innerHTML = files.toFixed(0);
}


/*
Medium.

1. The user enters the amount of money in the wallet and the price of one chocolate bar. The program prints how many chocolates the user can buy and how much change he will have left.
2. Ask the user for a three-digit number and print it backwards. To solve the problem, you will need the % operator (remainder of division).
*/


//__1__//

let moneyAtPocket = document.querySelector('.money-pocket');
let chocolateBarPrice = document.querySelector('.chocolate-bar-price');
let chocolateCalculationButton = document.querySelector(".chocolate-bar-button")

chocolateCalculationButton.onclick = function () {

    let moneyAtPocketValue = +moneyAtPocket.value;
    let chocolateBarPriceValue = +chocolateBarPrice.value;
    let chocolateCalculation = Math.floor( moneyAtPocketValue / chocolateBarPriceValue);
    let moneyLeft = moneyAtPocketValue - (chocolateCalculation * chocolateBarPriceValue);

    document.getElementsByClassName("chocolates-buy")[0].innerHTML = chocolateCalculation.toFixed(0);
    document.getElementsByClassName("changes-left")[0].innerHTML = moneyLeft.toFixed(2);
}

//__2__//

let digitalNumber = document.querySelector(".digital-number");
let digitalNumberButton = document.querySelector(".digital-number__button")

digitalNumberButton.onclick = function () {
    let digitalNumberValue = [...digitalNumber.value];
    console.log(digitalNumberValue);
    let reversedigitalNumberValue = digitalNumberValue.reverse().join("");
    console.log(reversedigitalNumberValue);
    document.getElementsByClassName("digital-number__backwards")[0].innerHTML = reversedigitalNumberValue;

}



/*
Maximum.

1. The user enters the amount of a deposit in a bank for 2 months, with an interest rate of 5% per annum. Print the amount of accrued interest.

2. What will the expressions return:

                                    2 && 0 && 3

                                    2 || 0 || 3

                                    2 && 0 || 3
*/

//__1__//


let depositMoney = document.querySelector(".deposit-money");
let depositTime = document.querySelector(".deposit-time");
let yearPersent = document.querySelector(".deposit-persent");
let depositCalculationButton = document.querySelector(".money-calculation__button");


depositCalculationButton.onclick = function() {
    let depositTimeValue = +depositTime.value * 30.418;
    let depositMoneyValue = +depositMoney.value;
    let yearPersentValue = +yearPersent.value;
    // let yearPersentValue2 = +yearPersent.value / 100;
    console.log(yearPersentValue);
    let finalMoney = (depositMoneyValue * yearPersentValue * depositTimeValue / 365) / 100;
    console.log(finalMoney); 
    document.getElementsByClassName("receave-money")[0].innerHTML = finalMoney.toFixed(2);
}