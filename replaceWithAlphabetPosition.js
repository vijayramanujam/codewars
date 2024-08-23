function alphabetPosition(text) {

    text = text.toLowerCase()
    toBeReturned = []

    let profile = {}
  
    for (let i = 1, count = 97; i < 27; i++) {

        profile[String.fromCharCode(count)] = i
        count++
    }

    for (let i of text) {

        if (i.charCodeAt(0) > 96 && i.charCodeAt(0) < 123) toBeReturned += String(profile[i]) + ' '
    }

    return String(toBeReturned).trim()
    
    
}
