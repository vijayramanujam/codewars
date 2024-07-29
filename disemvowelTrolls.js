function disemvowel(str) {

    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let result = '';

    for (let i of str) {

        if (!vowels.includes(i)) {

            result += i
        }
    
    }

    return result
}
