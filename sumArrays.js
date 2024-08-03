function sum (numbers) {


    return numbers.reduce((acc, elem) => {

        return acc += elem
    }, 0)
};

