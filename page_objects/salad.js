class Salad {
  constructor() {
    this.count = 0;
    this.lastError = null;
  }

  // Make a salad using vegetable instances
  make(vegetable1, vegetable2, vegetable1Needed, vegetable2Needed) {
    if (vegetable1.hasEnough(vegetable1Needed) && vegetable2.hasEnough(vegetable2Needed)) {
      vegetable1.useForSalad(vegetable1Needed);
      vegetable2.useForSalad(vegetable2Needed);
      this.count += 1;
      return true;
    } else {
      throw new Error('Not enough ingredients to make a salad');
    }
  }

  // Try to make a salad and catch any errors
  tryMake(vegetable1, vegetable2, vegetable1Needed, vegetable2Needed) {
    try {
      this.lastError = null;
      return this.make(vegetable1, vegetable2, vegetable1Needed, vegetable2Needed);
    } catch (error) {
      this.lastError = error.message;
      return false;
    }
  }

  // Get the last error that occurred
  getLastError() {
    return this.lastError;
  }

  // Get current salad count
  getCount() {
    return this.count;
  }

  // Reset salad count
  reset() {
    this.count = 0;
    this.lastError = null;
  }

  // Get description of current state
  describe() {
    return `I have ${this.count} salad${this.count !== 1 ? 's' : ''}`;
  }
}

module.exports = Salad;
