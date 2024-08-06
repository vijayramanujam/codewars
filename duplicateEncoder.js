function duplicateEncode(word){

    word = word.toLowerCase()

    let obj = {}

    for (let i of word){

        obj[i] = (obj[i] || 0) + 1
    }

    let strToBeReturned = ''

    for (let i of word) {

        if (obj[i] > 1) strToBeReturned += ')'
        else strToBeReturned += '('
    }

    return strToBeReturned
}
