console.log('js');

$(document).ready(onReady);

function onReady() {
    console.log('JQuery is lodaed');
    $('#submit').on('click', employeeAdd);
}

let employeeArray = [];

function EmployeeInfo( firstName, lastName, idNumber , jobTitle , annualSalary ){
    let employee = {
        firstName: firstName,
        lastName: lastName,
        idNumber: idNumber,
        jobTitle: jobTitle,
        annualSalary: annualSalary
    }
    return employee;
}

function employeeAdd(){
        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let idNumber = $('#idNumber').val();
        let jobTitle = $('#jobTitle').val();
        let annualSalary = $('#annualSalary').val();

        
        employeeArray.push(EmployeeInfo(firstName, lastName, idNumber, jobTitle, annualSalary));

        //console.log(employeeArray);

        $('#firstName').val('');
        $('#lastName').val('');
        $('#idNumber').val('');
        $('#jobTitle').val('');
        $('#annualSalary').val('');

        addToTable(employeeArray);
}

function addToTable(employeeArray){
    $('.table').empty();
    $('.table').append( `<tr class="topRow"><th>First Name</th> <th>Last Name</th> <th>Employe ID</th> <th>Job Title</th> <th>Annual Salary</th> </tr>`);

    for (let index = 0; index < employeeArray.length; index++) {
        let empOut = employeeArray[index];
        $('.table').append(`<tr><td>${empOut.firstName}</td><td>${empOut.lastName}</td><td>${empOut.idNumber}</td><td>${empOut.jobTitle}</td><td>${empOut.annualSalary}</td></tr>`);
        
    }
    calcTotal(employeeArray);

}

function calcTotal(employeeArray) {
    let totalMonthly = 0;

    for (let index = 0; index < employeeArray.length; index++) {
        const add = employeeArray[index];
        let monthlyAdd = (add.annualSalary / 12);
        console.log(monthlyAdd);
        totalMonthly += monthlyAdd;
        console.log(totalMonthly);
    }

    totalMonthly = (totalMonthly/employeeArray.length);
    console.log(totalMonthly);
    //displayMonthly(totalMonthly);
}