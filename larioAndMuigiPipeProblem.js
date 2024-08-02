function pipeFix(numbers) {
  
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    
    const result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    
    return result;
}
