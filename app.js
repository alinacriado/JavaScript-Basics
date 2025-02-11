/*
  Есть выгрузка операций пользователя
  const operations = [1000, -700, 300, -500, 10000];
  а так же начальный баланс в 100$
  Необходимо сделать функции расчёта:
  - Итогового баланса
  - Наличия отрицательного баланса (если после очередной операции баланс < 0, то выдавать false)
  - Расчёта среднего расхода и среднего дохода
*/

const operations = [1000, -700, 300, -500, 10000];
const initialBalance = 100;

const getResult = (arrayOfOperations, startingBalance) => {
  let result = 0;
  for (const operation of arrayOfOperations) {
    result += operation;
  }
  return startingBalance + result;
}

const getNegativeBalance = (arrayOfOperations, startingBalance) => {
  let balance = startingBalance;
  let isPositive = true;
  for (const operation of arrayOfOperations) {
    balance += operation;
    if (balance < 0) {
      isPositive = false;
      break;
    }
  }
  return isPositive;
}

const getAverage = (arrayOfOperations) => {
  let incomes = 0;
  let incomesNumber = 0;
  let expenses = 0;
  let expensesNumber = 0;

  for (const operation of arrayOfOperations) {
    if (operation > 0) {
      incomes += operation;
      incomesNumber ++;
    }
    if (operation < 0) {
      expenses += -operation;
      expensesNumber ++;
    }
  }
  const averageIncome = incomes / incomesNumber;
  const averageExpense = expenses / expensesNumber;

  console.log(`Средний доход = ${averageIncome}$, cредний расход = ${averageExpense}$`);
}

console.log(`Итоговый баланс: ${getResult(operations,initialBalance)}$`);
console.log(getNegativeBalance(operations, initialBalance));
getAverage(operations);