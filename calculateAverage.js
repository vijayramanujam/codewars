function findAverage(array) {

    if (array === undefined || array.length == 0) {
        return 0
    }

    let arrayTot = array.reduce((acc, elem) => {
        return acc += elem

    })

    return arrayTot / array.length

}
