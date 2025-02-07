/*
	Пользователь:
	- Возраст
	- Наличие работы
	- Деньги
	Нужно проверить может ли он купить новый MacBook за 2000$?
	Он может брать не только свои деньги, но и взять кредит.
	Ему дадут 500$, только если ему больше 24-х лет и он
	имеет работу, 100$ если ему просто больше 24-х лет и 0 в
	ином случае.
	Напишите функцию, которая принимает данные пользователя
	и товара и возвращает true или false;
*/

const MacBookPrice = 2000;
const deposit = 1000;

/* function computeCreditSum(age, haveJob) {
	if (age > 24 && haveJob) {
		return 500;
	} else if (age > 24) {
		return 100;
	} return 0;
}

function canBuy(age, haveJob, deposit, productPrice) {
	const userMoney = computeCreditSum(age, haveJob) + deposit;
	console.log(`У вас ${userMoney}$`);

	if (userMoney >= productPrice) {
		return true;
	} else {
		return false;
	}
} */

function computeCreditSum(age, haveJob) {
	return age > 24 && haveJob ? 500 : age > 24 ? 100 : 0;
}

function canBuy(age, haveJob, deposit, productPrice) {
	const userMoney = computeCreditSum(age, haveJob) + deposit;
	console.log(`У вас ${userMoney}$`);

	return userMoney >= productPrice;
}

console.log(canBuy(23, true, 1000, MacBookPrice));

/* function computeCreditSum(age, haveJob) {
	switch(true) {
		case age > 24 && haveJob:
			return 500;
		case age > 24:
			return 100;
		default:
			return 0;
	}
} */
