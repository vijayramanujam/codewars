function century(year) {

    let centuries = Math.floor(year / 100)

    return (year / 100) - centuries === 0 ? centuries : centuries + 1


}