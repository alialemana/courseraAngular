//Object student
var student = {
    name: "",
    type: "student"
};

//Listener for different events
document.addEventListener('DOMContentLoaded', contentLoaded);//when entire page is loaded

function contentLoaded(event) {
    document.getElementById('name').addEventListener("keyup", keyUp);//looks for name and sets up keyup listener
}

function keyUp(event) {
    calculateNumericOutput();//calculate numeric output
}

function calculateNumericOutput(){
    student.name = document.getElementById('name').value;//takes name and saves it into student.name

    var totalNameValue = 0;
    for (var i = 0; i<student.name.length; i++){
        totalNameValue+=student.name.charCodeAt(i);
    }

    var output = "Total Numeric values of person's name is " + totalNameValue;
    document.getElementById('output').innerText = output;

}