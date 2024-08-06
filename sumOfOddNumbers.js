function rowSumOddNumbers(n) {


    let arr = []
    

    for (let i = 0; i < n; i++) {

        arr.push(2 * i)
    }

    const tot = arr.reduce((acc, elem) => {

        acc += elem
        return acc
    })

    let start = tot + 1
    console.log(start)

    let arrToSum = []
    arrToSum.unshift(start)

    for (let i = 1; i < n; i++) {

        start += 2
        arrToSum.push(start)
    }


    let sumToBeReturned = arrToSum.reduce((counter, elem) => counter += elem, 0)
    return sumToBeReturned
}
