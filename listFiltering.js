function filter_list(l) {


    let newArr = l.filter(isNotString)

    return newArr

}

function isNotString(elem) {

    return typeof elem === 'number'

}