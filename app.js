const {update} = require('./update')
const {getTitle, getTable, source_temp, getInput} = require('./view')
const {printTable} = require('console-table-printer')

async function app(model){
    while(true){
        const title = getTitle()
        const table = getTable(model)

        console.clear()
        console.log(title)
        printTable(table)

        const {source} = await source_temp()
        const {value, from, to} = await getInput(model, source)
        const updateModel = update(source, value, from, to)
        
        model = updateModel
    }
}


module.exports = {
    app
}