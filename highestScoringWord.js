function high(x){

    let profile = {}
    let count = 1
    let scores = []

    for (let i = 97; i < 123; i++) {

        profile[String.fromCharCode(i)] =  count
        count++
    }

    x.split(' ').map(x => {

        let word = x
        let score = 0

        for (let i of word) {

            score += profile[i]
            
        }

        scores.push(score)
    })

    return x.split(' ')[scores.indexOf(Math.max(...scores))]

}
