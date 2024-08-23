const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
// user prompts for logo design
inquirer.prompt([
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for your logo text:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hex):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['Circle', 'Triangle', 'Square'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hex):',
    }
    // taking in user answers to create the correct shape
]).then(answers => {
    let shape; 
    if (answers.shape === 'Circle') {
        shape = new Circle();
    } else if (answers.shape === 'Triangle') {
        shape = new Triangle();
    } else if (answers.shape === 'Square') {
        shape = new Square();
    }
    shape.setColor(answers.shapeColor);

    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
   ${shape.render()}
   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>`;

fs.writeFileSync('logo.svg', svgContent);
console.log('Generated logo.svg');

});
