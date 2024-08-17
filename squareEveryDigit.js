function squareDigits(num) {

    let numsArr = String(num).split("")

    numsArr = numsArr.map(elem => {

        return String(Number(elem) ** 2)
    })

    return Number(numsArr.join(""))


}
