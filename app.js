'use strict';
const panel = document.querySelector('.panel');
console.log(panel); // <div class="panel">I love this!</div>
const panelText = document.querySelector('.panel').innerText;
console.log(panelText); // I love this!
document.querySelector('.panel').innerText = 'New text';
document.querySelector('.input').value = 'Text';