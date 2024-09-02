var number=function(array) {

    array = array.map((x, index)=> {
        
        return `${index + 1}: ${x}`
    });

    return array
}
