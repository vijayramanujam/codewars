function positiveSum(arr) {

    const tot = arr.reduce((acc, x) => {

        if (x > 0) acc+= x

        return acc
        
    }, 0)

    return tot
}
