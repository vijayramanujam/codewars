function duplicateCount(text){

    text = text.toLowerCase()
  
    let res = 0

    let profile = {}

    for (let i of text) {

        profile[i] = (profile[i] || 0) + 1
    }

    for (let i in profile) {

        if (profile[i] > 1) res++
    }

    return res
}
