function flattenAndSort(array) {

    return array.reduce((acc, subArr) => acc.concat(subArr), []).sort((a, b) => a - b)

}