function fakeBin(x){

    arr = x.split('')

    console.log(arr)

    const newArr = arr.map(x => {

        return Number(x) >= 5? '1': '0' 
    })

    return newArr.join('')

}
