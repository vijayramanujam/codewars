
function correct(string)
{

    let x = {

        5: 'S',
        0: 'O',
        1: 'I'
    }


    for (let i of string) {

        if (i in x) string = string.replace(i, x[i])
    }

    return string
}

