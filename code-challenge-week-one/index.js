let prompt = require("prompt-sync")();

//Function that Calculates and displays the student's grade.
function studentGrade(){
    //This prompt asks the user to input the student's mark
    let marks = parseFloat(prompt("Enter student's mark: "));
//Checks if the marks is a number and is greater than 0 and les than or equal to 100
    if (isNaN(marks) || marks < 0 || marks > 100){
    console.log("Marks should be between 0 and 100")
return;}//Exits the function if the user's input is invalid

//It ddeclares a variable that stores the student's grade
let grade;
//Determine the student's grade depending on the arks
if (marks > 79){
    grade = "A"
}

else if (marks >= 60){
    grade = "B"
}
else if (marks >= 50){
    grade = "C"
}
else if (marks >= 40){
    grade = "D"
}
else {
    grade = "E"
}
//Prints out the student's grade
console.log(`The student's grade is ${grade}`)
}
//Calls the function
studentGrade();


