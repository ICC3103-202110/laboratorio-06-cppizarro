const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

const {model} = require('./model')

function getTitle(){
    return chalk.cyanBright(
        figlet.textSync(
            'Unit Converter App',
            {
                horizontalLayout: 'full',
                font: 'digital',
                width: 80
            }
        )
    )
}

function getTable(model){
    
    const {leftValue} = model
    const {leftUnit} = model
    const {rightValue} = model
    const {rightUnit} = model
    
    return [
        {
            'leftValue': leftValue,
            'leftUnit': leftUnit,
            'rightValue': rightValue,
            'rightUnit':rightUnit
        }
    ]
}

function getInput(model){
    inquirer.prompt([
            {
                type: 'confirm',
                name: 'source',
                message: 'Left temperature is source? ',

            },
            {
                type: 'input',
                name: 'value',
                message: 'Temperature value to convert?'

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
        .then(function(answer){
            console.log(answer.source)
        })
}

module.exports = {
    getTitle,
    getTable,
    getInput
}