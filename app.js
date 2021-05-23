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

        const {source, value, from, to} = await getInput(model)
        const updateModel = update(source, value, from, to)
        
        model = updateModel
    }
}


module.exports = {
    app
}