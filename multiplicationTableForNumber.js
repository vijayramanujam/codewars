function multiTable(number) {

    let table = ''

    for (let i = 1; i < 11; i++) {

        table += `${i} * ${number} = ${number * i}\n`
    }

    return table.trim()
}
