'use strict';

function submitForm() {
  const input = document.querySelector('.input').value;
  if (!input) {
    return;
  }
  document.querySelector('.panel').innerText = input;
  document.querySelector('.input').value = '';
  document.querySelector('.notification').classList.add('notification_active');
}

function inputChanged(e) {
  if (e.code === 'Enter') {
    submitForm();
  }
};

// const newElement = document.createElement('button');
// newElement.classList.add('button');
// newElement.innerText = 'Кнопка';

const newElement = document.createElement('div');
newElement.classList.add('panel');
const pannelText = 'Панель'
newElement.innerHTML = `<button class="button">${pannelText}</button>`
document.querySelector('.test').appendChild(newElement);