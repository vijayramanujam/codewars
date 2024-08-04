function highAndLow(numbers){

    let nums = numbers.split(' ')

    nums = nums.map(x => {

        return Number(x)
    })

    return [Math.max(...nums), Math.min(...nums)].join(' ').toString()
    
  
}

