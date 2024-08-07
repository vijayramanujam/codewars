function sumMix(x){

    return x.reduce((acc, elem) => {

        acc += Number(elem)
        return acc
    }, 0)
}
