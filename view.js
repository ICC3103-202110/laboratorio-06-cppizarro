const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

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

function source_temp(){
    inquirer.prompt([
        {
            type: 'confirm',
            name: 'source',
            message: 'Left temperature is source? ',

        }
    ])
}

function source_temp(){
    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'source',
            message: 'Left temperature is source? ',

        }
    ])
}

function getInput(model, source){

    const {leftValue} = model
    const {rightValue} = model
    if (source === true){
        defaultVal = leftValue
    }
    else if (source === false){
        defaultVal = rightValue
    }

    return inquirer.prompt([
            {
                type: 'input',
                name: 'value',
                message: 'Temperature value to convert?',
                default: defaultVal

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
}

module.exports = {
    getTitle,
    getTable,
    source_temp,
    getInput
}