#! /usr/bin/env node
import inquirer from "inquirer";
// 1.Computer will generate a random number.
let randomNumber = Math.floor(Math.random() * 6 + 1);
// 2. Print greeting message to users.
console.log(`"Welcome to Number guessing game."`);
// 3.Ask name of user and then ask for guessing a number.
let answer = await inquirer.prompt([
    {
        name: "playerName",
        type: "input",
        message: "Please tell me your name: ",
    },
    {
        name: "gussedNumber",
        type: "number",
        message: "Please guess a number between 1-6.",
    },
]);
// 4. Compare guessed number with random number and show the result.
if (answer.gussedNumber === randomNumber) {
    console.log(`Congratulations! ${answer.playerName}, you have guessed right number.`);
}
else {
    console.log(`Sorry! ${answer.playerName}, you guessed a wrong number.`);
}
