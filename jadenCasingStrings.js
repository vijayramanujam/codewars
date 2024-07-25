String.prototype.toJadenCase = function () {

    let s = ''

    let str = this.split(' ')
    for (let i of str) {

        i = i.charAt(0).toUpperCase() + i.slice(1,)
        s += ' ' + i
    }

    return s.trim()

};