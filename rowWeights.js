function rowWeights(array){


    t1 = 0
    t2 = 0

    array.map((elem, index) => {

        if (index % 2 === 0) {

            t1 += elem
            return
            
        }

        t2 += elem
        
    })

    return [t1, t2]
}
