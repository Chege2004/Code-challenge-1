# Code-challenge-1
In this repository you will find some codes that are as follows:
    1. Generates a grade will refrence to the marks input.
    2. Checks the speed of a vehicle and provide the points.
    3 . Generates the payee of someone ,nhif and nssf with refrence to the details he/she provides.
All the above are under the CODE folder in which there are files for every solution being provided above.
   # Grade-Generator
    Grade Calculator
    The gradeCalculator function is used to determine and display a grade based on the marks entered by a student.

    How it Works
    Prompt for User Input:

    The function prompts the user to enter their marks.
    Input Validation:

    It checks if the user entered a valid numeric value. If not, it prompts the user to enter a value until a valid input is provided.
    Range Check:

    It verifies if the entered marks are within the valid range of 0 to 100. If the marks are outside this range, it alerts the user to enter a value within the specified range.
    Grade Calculation:

    Based on the entered marks:
    Grades "A", "B", "C-", "D-", and "E-" are assigned according to the following criteria:
    Marks greater than 79: "Grade A"
    Marks between 60 and 79 (inclusive): "Grade B"
    Marks between 50 and 59 (inclusive): "Grade C-"
    Marks between 40 and 49 (inclusive): "Grade D-"
    Marks 40 and below: "Grade E-"
    Console Output:

    The calculated grade is logged to the console.
    Notes:
    This function assumes that grades are calculated based on fixed grade boundaries as per the conditions provided.
    Adjustments can be made to the grade boundaries and conditions based on specific grading schemes or requirements.

   
   # speed-detector
    The speedDetector function is designed to determine the severity of a speeding violation based on a user's input of their speed compared to a specified speed limit.

    How it Works
    Prompt for User Input:

    The function prompts the user to enter their current speed.
    Input Validation:

    It checks if the user entered a valid numeric value that is greater than zero. If not, it prompts the user again until a valid input is provided.
    Speed Limit Check:

    If the entered speed is less than or equal to the predefined speed limit (70 km/h), it logs "Ok" indicating that the speed is within the limit.
    Speeding Violation Calculation:

    If the entered speed exceeds the speed limit, it calculates the amount of speeding over the limit (overSpeed) and determines the number of demerit points (points) based on how much the speed exceeds (kmPerPoint = 5 km/h per point).
    The number of points is calculated using Math.floor((speed - speedLimit) / kmPerPoint).
    License Suspension Check:

    If the calculated points are 12 or more, it logs "License suspended", indicating that the user's driving license should be suspended due to excessive speeding.
    Console Outputs:

    Results are primarily logged to the console for simplicity in this example where by when you open the index.html into a browser and open up the console and call back the function you will see a practical overview of the results on the console.
    javascript
    Notes:
    This function assumes that the speed limit is fixed at 70 km/h and the demerit points system follows a 5 km/h increment per point over the speed limit.
    Adjustments can be made to speedLimit and kmPerPoint variables based on specific traffic regulations or requirements.


# Net-Salary-Calculator
    Net Salary Calculation
    This JavaScript program calculates net salary deductions based on user input for salary, benefits, and year of taxation. It incorporates various tax calculations depending on the year of taxation and whether the user opts for monthly or yearly tax calculations.

    How to Use
    Input Requirements:

    Enter the salary and benefits as numeric values greater than zero.
    Specify the year of taxation (numeric value).
    Taxation Rules:

    For taxation years 2023 and later:
    Prompt for "Monthly" or "Yearly" tax calculation.
    Calculate PAYE (tax) based on the provided salary using specific tax brackets.
    For taxation years between 2022 and 2021:
    Similar tax calculation options as above, but using different tax brackets.
    Display NHIF (National Hospital Insurance Fund) deduction based on the provided benefits.
    Calculate NSSF (National Social Security Fund) deduction based on the year of payment for monthly salaries.
    Functions:

    netSalary(): Main function to initiate salary calculation based on user inputs.
    calculatePayeeMonthlyTwoThree(), calculatePayeeYearlyTwoThree(), calculatePayeeMonthlyTwoOne(), calculatePayeeYearlyTwoOne(): Functions to calculate PAYE based on salary and year of taxation.
    calculateNhifDeduction(): Function to calculate NHIF deduction based on benefits.
    nssfDeduction(): Function to calculate NSSF deduction based on monthly salary and year of payment.
    Output:

    Displays calculated PAYE (tax), NHIF deduction, and NSSF deduction based on user inputs and choices.
    Usage Notes
    Ensure all inputs are valid numeric values greater than zero.
    Verify the year of taxation is within valid ranges (2023 and later, or between 2022 and 2021).
    Follow prompts to specify tax calculation type (monthly or yearly).
    Review console logs for detailed deduction information.