function converter(value, from, to){
    if (from === to){
        convertedValue = value
    }

    else if (from === 'Celsius'){
        if (to == 'Fahrenheit'){
            convertedValue = value*(9/5) + 32
        }
        else if (to === 'Kelvin'){
            convertedValue = + value + 273.15
        }
    }

    else if (from === 'Fahrenheit'){
        if (to == 'Celsius'){
            convertedValue = (value - 32)/(9/5)
        }
        else if (to === 'Kelvin'){
            convertedValue = (value - 32)/(9/5) + 273.15
        }
    }

    else if (from === 'Kelvin'){
        if (to == 'Fahrenheit'){
            convertedValue = (value - 273.15)*(9/5) + 32
        }
        else if (to === 'Celsius'){
            convertedValue = value - 273.15
        }
    }

    return convertedValue
    
}

function update(source, value, from, to, model){

    const convertedValue = converter(value, from, to)

    if (source  === true){
        return {
            ...model,
            leftValue: value,
            leftUnit: from,
            rightValue: convertedValue,
            rightUnit: to
        }
    }

    if (source  === false) {
        return {
            ...model,
            leftValue: convertedValue,
            leftUnit: to,
            rightValue: value,
            rightUnit: from
        }
    }
}

module.exports = {
    update
}