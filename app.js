//const {initModel} = require('./model')
const {update} = require('./update')
const {getTitle, getTable, getInput} = require('./view')
const {printTable} = require('console-table-printer')

async function app(model){
    while(true){
        const title = getTitle()
        const table = getTable(model)

        console.clear()
        console.log(title)
        printTable(table)

        console.log('hola')
        //const {source, value, from, to} = await getInput(model)
        //const updateModel = update(source, value, from, to)

        //console.log(updateModel)
        console.log('hola')

        //model = updateModel
    }
}


module.exports = {
    app
}