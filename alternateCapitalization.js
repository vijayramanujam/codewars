function capitalize(s){

    let toBeReturned = []

    s = s.split('').map((x, i) => {

        if (i % 2 !== 0) {

            return x.toUpperCase()
        } 

        return x
    
    }).join('')

    toBeReturned.push(s)

    s = s.split('').map(x => {

        if (x.toUpperCase() === x) return x.toLowerCase();
        return x.toUpperCase()
    }).join('')

    toBeReturned.push(s)
    return toBeReturned.reverse()
    
};

