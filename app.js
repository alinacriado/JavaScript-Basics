'use strict';

function removePassword(reset) {
  if (reset) {
    this.password = undefined;
  } else {
    this.password = '1';
  }
}

const user = {
  name: 'Petya',
  password: '1786'
}

const resetUserPassword = removePassword.bind(user, true);
resetUserPassword();
// removePassword.call(user, true);
console.log(user);

