const {app} = require('./app')
const {initModel} = require('./model')

app(initModel)

/*
const inquirer = require("inquirer");

inquirer.prompt([
    {
        type: 'confirm',
        name: 'source',
        message: 'Left temperature is source? '

    },
    {
        type: 'list',
        message: 'From?',
        name: 'from',
        choices: ['Celsius', 'Fahrenheit', 'Kelvin']

    },
    {
        type: 'list',
        message: 'To?',
        name: 'to',
        choices: ['Celsius', 'Fahrenheit', 'Kelvin']

    }
])
.then(function(answer) {
    if (answer.source) {
        console.log('hola')
    }
    else {
        console.log('chao')
    }
})

*/
