#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let runAgain = true;
while (runAgain) {
    console.log(chalk.magenta.bold(`~~~~~~~~~~~~~~~~~~~~Welcome To Sid ${chalk.yellow.bold('Word Counter')} app!~~~~~~~~~~~~~~~~~~\n\n`));
    const choice = await inquirer.prompt({
        name: "option",
        type: "list",
        choices: ["Count Words", "Count Letters"],
        message: "What do you want to do?",
    });
    if (choice.option === "Count Words") {
        const userInput = await inquirer.prompt({
            name: "paragraph",
            type: "input",
            message: "Enter a paragraph to count words",
        });
        const wordCount = userInput.paragraph.split(" ").length;
        console.log(chalk.greenBright("^^^^^^^^^^^ Total Number of Words ^^^^^^^^^^^:"));
        console.log(chalk.magentaBright(`^^^^^^^^^ >> ${wordCount} << ^^^^^^^^^`));
    }
    else {
        const userInput = await inquirer.prompt({
            name: "paragraph",
            type: "input",
            message: "Enter a paragraph to count letters",
        });
        const letterCount = userInput.paragraph.length;
        console.log(chalk.green("^^^^^^^^^^^ Total Number of Letters:^^^^^^^^^^^^"));
        console.log(chalk.magentaBright(`^^^^^^^^^ >> ${letterCount} << ^^^^^^^^^`));
        let words = userInput.paragraph.trim().split("");
        if (userInput.paragraph === "") {
            console.log('\n\n');
            console.log(chalk.redBright.bold('ERROR! U need to write some thing to count'));
            console.log(chalk.greenBright('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'));
        }
        const repeat = await inquirer.prompt({
            name: "again",
            type: "confirm",
            message: "Would you like to count again?",
        });
        if (repeat.again === false) {
            runAgain = false;
            console.log(chalk.magenta.bold(`${chalk.redBright("=".repeat(45))}\n ~~~~~~~~~~~~~~~~Thanks for using My ${chalk.yellow.bold('word Counter')} app! ~~~~~~~~~~~~~~~~~~~~~~\n`));
            console.log(chalk.green.bold(`~~~~~~~~~~~~~~~~~~~~~~Credit: ${chalk.yellow.bold('Chef Sidrah Kazi')} ~~~~~~~~~~~~~~~~~~~~~~\n`));
        }
    }
}
