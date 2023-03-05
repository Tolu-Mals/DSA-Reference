/**
 * @param {number} x
 * @param {number} n
 * @return {number}
*/

var myPow = function (x, n) {
  const subPow = (x, n) => {
    if(x === 0) return 0;
    if(n === 0) return 1;

    let res = subPow(x, Math.floor(n / 2));
    res = res * res;

    if(n % 2 === 0) return res;
    return res * x;
  }

  const res = subPow(x, Math.abs(n));

  if(n >= 0){
    return res;
  } else {
    return 1 / res;
  }
};

console.log(myPow(2, 10));