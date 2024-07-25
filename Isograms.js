function isIsogram(str) {

    let model = {};


    for (let i of str.toLowerCase()) {

        model[i] = (model[i] || 0) + 1

    }

    for (let i in model) {

        if (model[i] > 1) return false;
    }

    return true;
}