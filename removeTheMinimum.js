function removeSmallest(numbers) {
  if (numbers.length === 0) return []

   let indexOfMin = numbers.indexOf(Math.min(...numbers))


    let newNums = numbers.filter((element, index)=> {

        return index !== indexOfMin
    })

    return newNums
}
