interface IEmployee{

    empid: number,
    empname: string,
    emploc: string,
    empdesign: string
}


var newEmployee:IEmployee = {
    empid: 101,
    empname: 'Sam',
    emploc: 'Mumbai',
    empdesign: 'Team lead'
}

console.log(newEmployee.empname)