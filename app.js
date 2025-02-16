/*
  Релизовать методы увеличения и уменьшения баланса,
  при котором каждая операция сохраняется в массив
  operations в виде { reason: 'Оплата налогов', sum: -100 }.
  Возвращается true, если успешно и false, если не хватает баланса.
   Так же реализовать метод вывода числа операций по кошельку
*/

const wallet = {
  balance: 0,
  operations: [],
  balanceIncrease: function (userReason, userSum) {
    this.balance += userSum;
    this.operations.push({
      reason: userReason,
      sum: userSum
    });
    return true;
  },
  balanceDecrease: function (userReason, userSum) {
    if (this.balance < userSum) {
      console.log(false);
      return false;
    }
    this.balance -= userSum;
    this.operations.push({
      reason: userReason,
      sum: -userSum
    });
    return true;
  },
  operationsQuantity: function () {
    console.log(this.operations.length);
  }
};

wallet.balanceIncrease('ЗП', 1000);
wallet.balanceDecrease('Налоги', 300);
wallet.balanceDecrease('Купить телефон', 900);
console.log(wallet);
wallet.operationsQuantity();
