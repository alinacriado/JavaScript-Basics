'use strict';

function submitForm() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('.input').value = '';
  // document.querySelector('.notification').style.display = 'block';
  document.querySelector('.notification').classList.add('notification_active');
  // document.querySelector('.notification').classList.remove('notification_hidden');
  document.querySelector('.notification').setAttribute('key', 1);
  console.log(document.querySelector('.notification').getAttribute('class'));
  console.log(Number(document.querySelector('.notification').getAttribute('key')));
}


function inputChanged(e) {
  if (e.code === 'Enter') {
    submitForm();
  }
};