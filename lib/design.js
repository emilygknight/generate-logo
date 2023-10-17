const inquirer = require('inquirer');
const fs = require('fs');
const { Circle , Triangle, Square } = require("./shapes");

// const shapes = require("./shapes");
// console.log(shapes);
// console.log(Circle);



class Design {
    constructor(name, textcolor, shape, color) {
        this.name = name;
        this.textcolor = textcolor;
        this.shape = shape;
        this.color = color;
    }
    run() {
      return inquirer.prompt([
          {
            type: 'input',
            name: 'name',
            message: 'Please Enter 3 Letters For Your Logo',
          },
          {
            type: 'input',
            name: 'textcolor',
            message: 'What color do you want your letters to be?'
          },
          {
            type: 'list',
            name: 'shape',
            choices: ['Circle', 'Square', 'Triangle']
        },
        {
            type: 'input',
            name: 'color',
            message: 'What color do you want as your backgorund?'
        }
        
      ]).then((answers) => {
      if (answers.shape === 'Circle') {
        console.log(Circle);
        // Circle.renderSvg();
        
      } else if (answers.shape === 'Triangle') {
       console.log(Triangle);
      //  Square.renderSvg();
   
      } else if (answers.shape === 'Square') {
        console.log(Square);
        // Triangle.renderSvg();
       
      }
          console.log(answers);
        })
        .catch((err) => {
          console.log(err);
          console.log('Oops. Something went wrong.');
        });
    }
};

module.exports = Design;