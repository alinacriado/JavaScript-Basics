'use strict';

const userInfo = {
  balance: 0,
  operations: 0,
  increase(sum) {
    this.balance += sum;
    this.operations++
  }
};

function user() {
  const userObject = { ...userInfo };
  return function() {
    return userObject;
  }
}
const user1 = user();
user1().increase(100);
user1().increase(200);
console.log(user1());

const user2 = user();
user2().increase(100);
user2().increase(50);
console.log(user2());