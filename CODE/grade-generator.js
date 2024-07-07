function gradeCalculator() {
    //Prompt student for marks
    const marks = prompt("Enter your marks");
    //Check if user entered a value as well as convert the input to a number
    
    const studentMarks = parseInt(marks);
    if (studentMarks === null || studentMarks === ""){
        alert("Please enter  a value");
        //Check if the marks are between 0 and 100
    }else if (studentMarks < 0 || studentMarks > 100) {
        alert("Please enter a value between 0 and 100");
        //Provide the appropriate grade based on the input marks
    }else if (studentMarks >79) {
        console.log("Grade A");
    }else if (studentMarks >=60 && studentMarks <=79) {
        console.log("Grade B");
    }else if (studentMarks >49 && studentMarks <=59) {
        alert("Grade C-");
    }else if (studentMarks >=40 && studentMarks<=49) {
        console.log("Grade D-")
    }else {
        console.log("Grade E-")
    }
}