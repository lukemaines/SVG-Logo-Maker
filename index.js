const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes');

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
        name: 'shareColor',
        message: 'Enter the shape color (color keyword or hex):',
    }
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
    
})