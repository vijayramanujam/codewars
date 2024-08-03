function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  const arrToBeReturned = birds.filter(bird => {

      return !geese.includes(bird)
  })

    return arrToBeReturned

};
