const rps = (p1, p2) => {

    var rules = {

        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    }

    if (p1 === p2) return 'Draw!'
    if (rules[p1] === p2) return 'Player 1 won!'
    return 'Player 2 won!'
};