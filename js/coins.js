//Initializing an empty object to hold the coin values inside the coinCounter function.
var coinPurse = {};

function coinCounter (num) {

  //Converting the argument that is passed in from a decimal to a whole number, to simplify the math.
  num = num * 100;

  //Find the number of quarters and assign to object.
  coinPurse.quarters = parseInt(num / 25);
  //To get a remainder and re-assigning it to num as the current amount.
  num = num % 25;

  coinPurse.dimes = parseInt(num / 10);
  num = num % 10;

  coinPurse.nickels = parseInt(num / 5);
  num = num % 5;

  coinPurse.pennies = num;

  return coinPurse;
}

var coins = coinCounter(2.23);
console.log('coins',coins);
