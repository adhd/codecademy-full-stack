const Calculate = {
  factorial(inputNum) {
    if (inputNum === 0) {
      return 1
    } else {
      return inputNum * Calculate.factorial(inputNum - 1);
    }
  }
}

module.exports = Calculate;
