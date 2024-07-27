function betterThanAverage(classPoints, yourPoints) {
  
  let classAvg = classPoints.reduce((acc, val) => {
    
    acc += val
    return acc
    
  }, 0);
  
  return yourPoints > (classAvg / classPoints.length) ? true:false
}

