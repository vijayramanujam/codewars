var isAnagram = function(test, original) {

    let testProfile = {}
    let originalProfile = {}
    
    if (test.length !== original.length) return false


    for (let i of test.toLowerCase()) {

        testProfile[i] = (testProfile[i] || 0) + 1;
    }

    for (let i of original.toLowerCase()) {

        originalProfile[i] = (originalProfile[i] || 0) + 1
    }

    for (let i in testProfile) {

        if (originalProfile[i] !== testProfile[i]) {

            return false
        }
    }

    return true
};
