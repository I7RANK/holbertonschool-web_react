import $ from "jquery";

const p1 = $('<p></p');
const p2 = $('<p></p');
const p3 = $('<p></p');

p1.text('Holberton Dashboard');
p2.text('Dashboard data for the students');
p3.text('Copyright - Holberton School');

$('body').append(p1);
$('body').append(p2);
$('body').append(p3);
