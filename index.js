// const inquirer = require('inquirer');
// const fs = require("fs");

// class Logo {
//     constructor(label, text, shape, color) {
//       this.label = label;
//       this.text = text;
//       this.shape = shape;
//       this.color = color;
//     }

//     printMetaData() {
        
//     }
// };

// console.log(Logo);

// const questions = [
//     {
//         type: 'input',
//         name: 'title',
//         message: 'Whats the title of your application?'
//     }, {
//         type: "input",
//         name: "description",
//         message: "What is the description of your project?"
//     }, {
//         type: "input",
//         name: "installation",
//         message: "What are the instructions to install your application?"
//     }, {
//         type: "input",
//         name: "usage",
//         message: "How do you use this application?"
//     }
// ];
//
// function writeToFile(answers) {

//     fs.writeFile('logo.svg', answers, (err) =>
//     err ? console.log(err) : console.log('Successfully created readme!')
//   );

// }

const Design = require('./lib/design.js');

const cli = new Design();

cli.run();