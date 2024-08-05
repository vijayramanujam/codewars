function accum(s) {

    s = s.toLowerCase()


    let arr = s.split('')

    let newArr = arr.map((char, index) => {

        let subStr = ""

        for (let i = 0; i < index + 1; i++) {

            subStr+= char
            
        }

        return subStr
    })

    console.log(newArr)

    newArr = newArr.map(char => {

        return char.charAt(0).toUpperCase() + char.slice(1)
    })

    console.log(newArr)

    return newArr.join('-').toString()

    
}
