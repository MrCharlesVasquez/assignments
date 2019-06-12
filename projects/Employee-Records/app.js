
let employees = []

function Employee( name, jobTitle, salary, status ="Full Times" ){
    this.name = name;
    this.jobTitle =jobTitle;
    this.salary = salary;
    this.status= status;

    this.printEmployeeForm = function(){
        console.log(`Name: ${this.name} Job Title: ${this.jobTitle} Salary: ${this.salary} Status: ${this.status} `)


        //return "Name: " + this.name
        
    }}
let employee1 = new Employee("bobbito" , "operationsManager", "$80,000")
let employee2 = new Employee("Nate", "C.F.O", "280,000")
let employee3 = new Employee("Moroni", "C.E.O", "270,000")

employee1.status = "Part-Time"

// console.log(employee1.printEmployeeForm())
// console.log(employee2.printEmployeeForm())
// console.log(employee3.printEmployeeForm())

employees.push(employee1);
employees.push(employee2);
employees.push(employee3);


    for (let i = 0 ; i < employees.length; i++) {
        employees[i].printEmployeeForm()
    }


