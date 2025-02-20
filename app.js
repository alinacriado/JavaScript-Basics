'use strict';

const company = {
  name: 'ООО Агро',
  employees: [
    {
      name: 'Света',
      getEmployeeName: function () {
        return this.name;
      }
    }
  ],
  ceo: {
    name: 'Вася',
    getCEOName: function () {
      return this.name;
    }
  },
  getCompanyName: function () {
    return this.name;
  }
};

console.log(company.getCompanyName());
console.log(company.ceo.getCEOName());
for (const amployee of company.employees) {
  console.log(amployee.getEmployeeName());
}