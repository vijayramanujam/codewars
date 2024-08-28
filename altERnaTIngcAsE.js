String.prototype.toAlternatingCase = function () {

    let res = this.valueOf().split('').map(char => {

        return char[0].charCodeAt(0) > 96 ? char.toUpperCase():char.toLowerCase()
    })

    return res.join('')
}
