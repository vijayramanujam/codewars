function isItLetter(character) {


    if ((character.charCodeAt() >= 65 && character.charCodeAt() <= 90) || (character.charCodeAt() >= 97 && character.charCodeAt() <= 122)) return true

    return false
}