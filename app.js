'use strict';

function submitForm() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input;
  // localStorage.setItem('text', JSON.stringify({ text: input }));
  document.querySelector('.input').value = '';
  document.querySelector('.notification').classList.add('notification_active');
  const textString = JSON.stringify({
    text: input
  });
  localStorage.setItem('text', textString);
}

function inputChanged(e) {
  if (e.code === 'Enter') {
    submitForm();
  }
};

// const obj = JSON.parse('{ "a": 1 }');
// console.log(obj);
// const str = JSON.stringify(obj);
// console.log(str);

