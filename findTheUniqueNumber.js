function findUniq(arr) {


    let profile = {}

    for (let i of arr) {

        profile[i] = (profile[i] || 0) + 1
    }

    for (let key in profile) {

        if (profile[key] === 1) return Number(key)
    }
}
