$(document).ready(() => {

    if (localStorage.getItem('student') != null) {
        var array = JSON.parse(localStorage.getItem('student'));
        $('#countStudent').text(array.length);
    }
});