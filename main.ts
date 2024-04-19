#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";
 
console.log (chalk.bold.greenBright("\t\t\t Currency Converter \n"));


const Currency: any = {

    USD: 1, // Base currency
    EUR: 0.94,
    GBP: 0.80,
    INR: 83.66,
    PKR: 280,

}
let condition = true;

while (condition){
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.blue("Enter from Currency"),
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "to",
        message: chalk.cyan("Enter to Currency"),
        type: "list",
        choices: ['USD', 'EUR', 'GBP', 'INR', 'PKR']
    },
    {
        name: "Amount",
        message: chalk.blueBright("Enter your amount"),
        type: "number",
    },
    
]);

let fromAmount = Currency[userAnswer.from]
let toAmount = Currency[userAnswer.to]
let amount = userAnswer.Amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(chalk.red("\t\n Amount:" , convertedAmount.toFixed(2) , "\t\n"));

let input = await inquirer.prompt({
    name: "answer",
    type: "list",
    message: chalk.yellow("What do you want?"),
    choices: ["Exit", "Contineu"],
});
if (input.answer === "Contineu"){
    condition = true
}
else {
    break;
}
};
console.log(chalk.magentaBright("\t\nThanks for using my Currency Converter\t\n"));
