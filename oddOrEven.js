function oddOrEven(array) {

    if (array.length === 0) return 'even'

    let tot = array.reduce((acc, val) => {

        acc += val
        return acc

    }, 0);

    return tot % 2 === 0 ? 'even' : 'odd'

}