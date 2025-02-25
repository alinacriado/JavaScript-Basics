'use strict';

function changeBalance() {
  let balance = 0;
  return function(sum) {
    balance += sum;
    console.log(balance);
  }
}

const change = changeBalance();
change(100); // 10-
change(-50); // 50
change(200); // 250

