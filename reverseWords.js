function reverseWords(str) {

   arr = str.split(' ').map(word => {

       return word.split('').reverse().join('')
   })

    return arr.join(' ')
}
