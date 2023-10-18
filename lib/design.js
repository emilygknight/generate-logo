const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
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
        let shapeSvg;
      if (answers.shape === 'Circle') {
        console.log(Circle);
        shapeSvg = new Circle(answers.name, answers.textcolor, answers.color);
        
      } else if (answers.shape === 'Triangle') {
       console.log(Triangle);
       shapeSvg = new Triangle(answers.name, answers.textcolor, answers.color);
   
      } else if (answers.shape === 'Square') {
        console.log(Square);
        shapeSvg = new Square(answers.name, answers.textcolor, answers.color);
      }
      console.log(this.color);
      const svgCode = shapeSvg.renderSvg();
          console.log(svgCode);

      // const svgPage = `<svg width="100" height="100">
      // ${svgCode}
      // </svg>`;
      
          return writeFile('logo.svg', svgCode);
        })
        .then(() => {
          console.log("Generated logo.svg!");
        })
        .catch((err) => {
          console.log(err);
          console.log('Oops. Something went wrong.');
        });
    }
};

module.exports = Design;