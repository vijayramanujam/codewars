function reverseLetter(str) {

    let res = ''

    for (let i of str) {

        if ((i.charCodeAt() >= 97 && i.charCodeAt() <= 122) || (i.charCodeAt() >= 65 && i.charCodeAt() <= 90)) {

            res += i
        }
    }

    return res.split('').reverse().join('')
  
  
}
