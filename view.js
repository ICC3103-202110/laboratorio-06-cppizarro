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

function getInput(model){
    const {billAmount} = model
    const {percentage} = model
    return inquirer.prompt([
        {
            name: 'billAmount',
            type: 'input',
            message: 'Bill Amount?',
            default: billAmount
        },

        {
            name: 'percentage',
            type: 'input',
            message: 'Tip(%)?',
            default: percentage
        }
    ])
}

module.exports = {
    getTitle,
    getTable,
    getInput
}
