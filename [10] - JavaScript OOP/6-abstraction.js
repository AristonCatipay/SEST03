// Abstraction:
// Hide complexities and only showing essential interface.

function Employee(name, age, baseSalary) {
  this.name = name;
  this.age = age;
  this.baseSalary = baseSalary;
  let monthlyBonus = 500;

  let calculateTotalSalary = function () {
    let totalSalary = baseSalary + monthlyBonus;
    console.log("Salary:", totalSalary);
  };

  this.getEmployeeDetails = function () {
    console.log("== Employee Details: ==");
    console.log("Name:", this.name);
    console.log("Age:", this.age);
    calculateTotalSalary();
  };

  //   this.calculateTotalSalary = function () {
  //     let totalSalary = this.baseSalary + this.monthlyBonus;
  //     console.log("Salary:", totalSalary);
  //   };
}

const employee1 = new Employee("Eyben", 18, 2000);
const employee2 = new Employee("Gerome", 18, 3000);
const employee3 = new Employee("Anne", 18, 2500);

employee1.getEmployeeDetails();
// Not allow the user to access the monthlyBonus and calculateTotalSalary
// employee1.monthlyBonus = 1000;
// employee1.calculateTotalSalary();
employee2.getEmployeeDetails();
employee3.getEmployeeDetails();

// This will not work
// console.log(employee1.monthlyBonus);
// employee1.calculateTotalSalary();
