function stray(numbers) {
  
  let nums = {};
  
  for (let i of numbers) {
    
    nums[i] = (nums[i] || 0) + 1;
    
  }
  
  for (let i of numbers) {
    
    if (nums[i] === 1) return i
    
  }
}
