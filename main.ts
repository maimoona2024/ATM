import inquirer from "inquirer";

let myBalance = 10000; // Dollar
const myPin = 1234;

async function startATM() {
    let pinAnswer = await inquirer.prompt([
        {
            name: "q1",
            message: "Please Enter Your Pin.",
            type: "number",
        }
    ]);

    if (pinAnswer.q1 === myPin) {
        console.log("Correct pin code!!!");

        let operationAns = await inquirer.prompt([
            {
                name: "operation",
                message: "Please select option",
                type: "list", // Changed to lowercase "list"
                choices: ["Withdraw", "Check Balance"]
            }
        ]);

        if (operationAns.operation === "Withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number",
                }
            ]);
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is: " + myBalance);
        } else if (operationAns.operation === "Check Balance") {
            console.log("Your Balance is: " + myBalance);
        }
    } else {
        console.log("Incorrect pin code. Please try again.");
    }
}

startATM();
