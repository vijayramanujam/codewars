function solve(s) {

    let lowerCase = 0, upperCase = 0

    let charArr = s.split('')

    charArr.forEach(element => {

        element.charCodeAt(0) > 96 ? lowerCase++ : upperCase++

    });

    return upperCase > lowerCase ? s.toUpperCase() : s.toLowerCase()
}
