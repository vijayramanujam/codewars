var capitals = function (word) {

    let caps = []
    
    word.split('').filter((elem, index) => {

          // console.log(elem, index, elem.charCodeAt(0))

          if ((elem.charCodeAt(0) > 64) && (elem.charCodeAt(0) < 91)) {

              caps.push(index)
          }
      })

    return caps
    
};
