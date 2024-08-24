function remove (string) {

    if (string[string.length - 1] === '!') string = string.slice(0, -1)
    return string
}
