function descendingOrder(n) {

    n = n.toString().split("").sort((a, b) => b - a).join('')
    return Number(n)

}