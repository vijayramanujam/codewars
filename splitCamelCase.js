function solution(string) {

    let res = ''

    for (let i of string) {

        if (i === i.toUpperCase()) res += ' ' + i
        else res += i
    }
    
  return res;
}
