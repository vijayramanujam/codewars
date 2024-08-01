function findNextSquare(sq) {

    if (Math.sqrt(sq) % 1 !== 0) return -1

    let numToBeReturned = sq + 1

    while (Math.sqrt(numToBeReturned) % 1 !== 0){

        numToBeReturned++;
    }

    return numToBeReturned
    
}
