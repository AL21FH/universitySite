var students = [];


// Klasse für das Object Student
class Student {

    constructor(firstName, lastName, Matrikelnummer) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.Matrikelnummer = Matrikelnummer;
    }
}


//Funktion um Student zu erstellen
function createStudent() {

    //JQuery in Verwendung um Input (ID) aus html zu verwenden
    let firstName = $('#InputFirstname').val();
    let lastName = $('#InputLastname').val();
    let Matrikelnummer = $('#InputNumber').val();

    var newStudent = new Student(firstName, lastName, Matrikelnummer);

    // push fügt student in den Array hinzu
    students.push(newStudent);

    // Speicherung in den Local-storage mit einem JSON
    localStorage.setItem('student', JSON.stringify(students));

    renderStudentsTable();

}


function renderStudentsTable() {

    //removed alle table rows die größer als 0 sind. 
    $("table tr:gt(0)").remove();
    //For loop die durch den Array students läuft und alle elemente ausgibt in der Tabelle
    for (let i = 0; i < students.length; i++) {

        $("table").append("<tr></tr>");
        let row = $("tr:last");
        $(row).append("<td>" + students[i].firstName + "</td>");
        $(row).append("<td>" + students[i].lastName + "</td>");
        $(row).append("<td>" + students[i].Matrikelnummer + "</td>");

    }

}

renderStudentsTable()

$(document).ready(() => {
    if (localStorage.getItem('student') != null) {
        students = JSON.parse(localStorage.getItem('student'));
        renderStudentsTable();
    }
});