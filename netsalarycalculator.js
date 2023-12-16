let prompt = require("prompt-sync")();

function calculateNetSalary() {
    //Prompts the user to input their salary and benefits
    let basicSalary = parseFloat(prompt("What is your basic salary?: "));
    let benefits = parseFloat(prompt("What are your benefits?: "));
   //Checks if the input of the user is a valid number
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log("Please enter a valid digit");
        return;
    }

    // Calculate gross salary by adding basic salary and benefits
    let grossSalary = basicSalary + benefits;

    // Paye function to calculate Paye based on gross salary
    function paye(grossSalary) {
        if (grossSalary < 24000) {
            console.log('PAYE: ' + grossSalary * 10 / 100);
        } else if (grossSalary >= 24000 && grossSalary <= 32333) {
            console.log('PAYE: ' + grossSalary * 25 / 100);
        } else {
            console.log('PAYE: ' + grossSalary * 30 / 100);
        }
    }

    // Call the paye function
    paye(grossSalary);

    // NHIF function to determine NHIF fee based on gross salary
    function ratesNHIF(grossSalary) {
        let nhifFee;

        // Example NHIF calculation (you can replace this with your logic)
        if (grossSalary >= 0 && grossSalary <= 5999) {
            nhifFee = 150;
        } else if (grossSalary >= 6000 && grossSalary <= 7999) {
            nhifFee = 300;
        }
    //Prints out your nhif fee
        console.log('NHIF: ' + nhifFee);
    }

    // Call the ratesNHIF function
    ratesNHIF(grossSalary);
}

// Call the main function
calculateNetSalary();
