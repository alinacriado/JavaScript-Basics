'use strict';

document.querySelectorAll('.one').forEach(element => {
  console.log(element.innerText);
});

// console.log(document.querySelector('#two').innerText);
console.log(document.getElementById('two').innerText);
console.log(document.querySelector('[user-id="4"]').innerText);