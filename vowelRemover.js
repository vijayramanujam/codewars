function shortcut (string) {
  
  const vowels = ['a', 'e', 'i', 'o', 'u']

  let stringArr = string.split('')

   let stringToBeReturned = stringArr.filter(char => {

       return !(vowels.includes(char))
   })

    return stringToBeReturned.join('')
}
