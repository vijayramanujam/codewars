function findOdd(A) {

    let numProfile = {}

    for (let i of A) {

        numProfile[i] = (numProfile[i] || 0) + 1;
    }

    for (let j in numProfile) {

        if (numProfile[j] % 2 !== 0) return Number(j)
    }
}
