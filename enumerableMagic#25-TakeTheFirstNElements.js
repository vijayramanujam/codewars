function take(arr, n) {

    arr = arr.map((elem, index) => {

        if (index < n) return elem
    
    }).filter(elem => {

        return elem !== undefined
    })

    return arr
}
