// To calculate age:
var year_born = prompt("Hoe oud ben je?", "Typ hier");
var d = new Date();
var n = d.getFullYear();
function getAge(birthYear){
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
calculatedAge = getAge(year_born);
alert("Hallo, " + "Je komt uit het jaar " + calculatedAge + "");
