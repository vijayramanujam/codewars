function getGrade (s1, s2, s3) {
  let avg = Math.floor((s1 + s2 + s3) / 3)

    switch(true) {

        case avg > 89:
            return 'A'
        case avg > 79:
            return 'B'
        case avg > 69:
            return 'C'
        case avg > 59:
            return 'D'
        default:
            return 'F'
    }
}
