
/* проверить является ли это номером телефона России */
/* верные */
const num1 = '89103235356';
const num2 = '+79103235356';
const num3 = '+7(910)3235356';
const num4 = '+7(910) 323-53-56';
const num5 = '     +7(910) 323-53-56   '
/* не верные */
const num1Error = '89103235';
const num2Error = '+7d910d323-53-56';
const num3Error = '9+7103235356';
 const num4Error = '89103g35356';
// console.log(isNaN(Number('222'))); // false
// console.log(isNaN(Number('bgjhgvj'))); // true

function isCorrectNumber(number) {
  number = number.trim();
  number = number.replaceAll('(', '');
  number = number.replaceAll(')', '');
  number = number.replaceAll('-', '');
  number = number.replaceAll(' ', '');
  let numberIsCorrect = true;
  if (number.length != 11 && number.length != 12) {
    numberIsCorrect = false;
  }
  if (!number.startsWith('+7') && !number.startsWith('8')) {
    numberIsCorrect = false;
  }
  for (const num of number) {
    if (isNaN(Number(num)) && num !== '+') {
      numberIsCorrect = false;
      break;
    }
  }
  return numberIsCorrect;
}

console.log(isCorrectNumber(num1));
console.log(isCorrectNumber(num2));
console.log(isCorrectNumber(num3));
console.log(isCorrectNumber(num4));
console.log(isCorrectNumber(num5));
console.log('---------')
console.log(isCorrectNumber(num1Error));
console.log(isCorrectNumber(num2Error));
console.log(isCorrectNumber(num3Error));
console.log(isCorrectNumber(num4Error));