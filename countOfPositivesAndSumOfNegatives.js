function countPositivesSumNegatives(input) {

    let sumOfNegatives = 0;
    let positives = 0;

    if (input === null || input.length === 0) return []

    for (let i of input) {

        if (i > 0) {

            positives++
        }

        else {

            sumOfNegatives += i
        }
    }

    return [positives, sumOfNegatives]
}

