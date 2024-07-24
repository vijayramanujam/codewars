function points(games) {

    let teamX = 0
    let teamY = 0

    for (let i of games) {

        x = Number(i[0])
        y = Number(i[2])

        if (x > y) {

            teamX += 3
            continue
        }

        if (x === y) {

            teamX++
        }

    }


    return teamX
}