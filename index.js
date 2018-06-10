
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  if (fromN === toN) {
    return fromN;
  }
  return toN + sum(fromN, toN - 1);
}

console.log(sum(3, 7));

module.exports = sum;
