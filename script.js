console.log('js');

$(document).ready(onReady);

function onReady() {
    console.log('JQuery is lodaed');
    $('#submit').on('click', employeeAdd);
    $('#table').on('click', '.deleteButton', deleteItem);
}

let employeeArray = [];
let overBudget = 20000;

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

        makeTable(employeeArray);
}

function makeTable(employeeArray){
    $('#table').empty();
    $('#table').append( `<tr class="topRow"><th>First Name</th> <th>Last Name</th> <th>Employe ID</th> <th>Job Title</th> <th>Annual Salary</th> </tr>`);

    for (let index = 0; index < employeeArray.length; index++) {
        let empOut = employeeArray[index];
        $('#table').append(`<tr class="${index}"><td>${empOut.firstName}</td><td>${empOut.lastName}</td><td>${empOut.idNumber}</td><td>${empOut.jobTitle}</td><td>${empOut.annualSalary}</td><td><button class="deleteButton">Delete</button></td></tr>`);
        
    }
    calcTotal(employeeArray);

}

function calcTotal(employeeArray) {
    let totalMonthly = 0;

    for (let index = 0; index < employeeArray.length; index++) {
        const add = employeeArray[index];
        let monthlyAdd = (add.annualSalary / 12);

        totalMonthly += monthlyAdd;

    }

    displayMonthly(totalMonthly);
}

function displayMonthly(totalMonthly){
    $("#totalMonthly").empty();
    $("#totalMonthly").append(`<h3>Total Monthly: ${totalMonthly}</h3>`);
    if(totalMonthly >= overBudget){
        $('h3').addClass('overBudget');
    }
    else if ($('h3').hasClass('overBudget') && totalMonthly < overBudget){
        $('h3').addClass();
    }  
}

function deleteItem(){

    for (let index = 0; index < employeeArray.length; index++) {
        console.log($(this).parent().parent().hasClass(`${index}`));
        if ($(this).parent().parent().hasClass(`${index}`)){
            employeeArray.splice(index, 1);
        }
    }
    // console.log($(this).parent().parent().hasClass('0'));
    $(this).parent().parent().remove();
    makeTable(employeeArray);
}