function stringClean(s){

    let res = ''

    for (let i = 0; i < s.length; i++) {

        if (isNaN(Number(s[i])) || s[i] === ' ') res += s[i]
    }
    
    return res
}
