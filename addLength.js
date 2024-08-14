function addLength(str) {
//start-here

    let strArr = str.split(' ')

    strArr = strArr.map((str) => str + ' ' + str.length)

    return strArr
}
