function findDifference(a, b) {

    const sumOfA = a.reduce((acc, elem) => {

        return acc *= elem
    })

    const sumOfB = b.reduce((acc, elem) => {

        return acc *= elem
    })

    return Math.abs(sumOfA - sumOfB)
    
}
