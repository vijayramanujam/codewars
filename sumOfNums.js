function getSum(a, b) {

    if (a === b) return a

    let sum = 0;
    let min = Math.min(a, b)
    let max = Math.max(a, b)

    for (let i = min; i <= max; i++) {

        sum += i;
    }

    return sum;
}