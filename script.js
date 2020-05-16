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

        console.log(employeeArray);

        $('#firstName').val('');
        $('#lastName').val('');
        $('#idNumber').val('');
        $('#jobTitle').val('');
        $('#annualSalary').val('');
}