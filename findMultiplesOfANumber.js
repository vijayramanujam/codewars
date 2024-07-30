function findMultiples(integer, limit) {

    let toBeReturned = []

    for (let i = 1; integer * i <= limit; i++) {

        toBeReturned.push(integer * i)
        
    }

    return toBeReturned
}
