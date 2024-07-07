function netSalary(){
    //prompt the user for input
    const salary = prompt("Enter salary")
    const benefits = prompt("Enter benefits")
    const yearOfTaxation = prompt("Enter year of taxation")
    if (salary === null || benefits === null || yearOfTaxation === null || salary.trim() === "" || benefits.trim() === "" || yearOfTaxation.trim() === ""){
        alert("Please enter a value");
        salary = prompt("Enter salary")
        benefits = prompt("Enter benefits")
        yearOfTaxation = prompt("Enter year of taxation")
        return;
    }
    else if (isNaN(salary) || isNaN(benefits) || isNaN(yearOfTaxation)){
        alert("Please enter a value in number format");
        return;
    }
    else if (salary < 0 || benefits < 0 || yearOfTaxation < 0){
        console.log("Your calculations ")
        return;
    }
}