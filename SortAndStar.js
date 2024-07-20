function twoSort(s) {

    let stringToBeReturned = ""

    s = s.sort();

    for (let i of s[0]) {

        stringToBeReturned += i[0] + "***"

    }

    return stringToBeReturned.slice(0, -3)


}

