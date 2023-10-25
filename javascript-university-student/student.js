var students = [];

class Student {

    constructor(firstName, lastName, Matrikelnummer) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Matrikelnummer = Matrikelnummer;
    }
}

$(document).ready(() => {
    if (localStorage.getItem('student') != null) {
        students = JSON.parse(localStorage.getItem('student'));
        renderStudentsTable();
    }
});

renderStudentsTable()

function createStudent() {

    let firstName = $('#InputFirstname').val();
    let lastName = $('#InputLastname').val();
    let Matrikelnummer = $('#InputNumber').val();

    var newStudent = new Student(firstName, lastName, Matrikelnummer);

    students.push(newStudent);

    localStorage.setItem('student', JSON.stringify(students));

    renderStudentsTable();

}

function renderStudentsTable() {

    //delete all students in the table
    $("table tr:gt(0)").remove();

    //render the students in the table

    for (let i = 0; i < students.length; i++) {

        $("table").append("<tr></tr>");
        let row = $("tr:last");
        $(row).append("<td>" + students[i].firstName + "</td>");
        $(row).append("<td>" + students[i].lastName + "</td>");
        $(row).append("<td>" + students[i].Matrikelnummer + "</td>");

    }

}