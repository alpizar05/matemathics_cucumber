class Vegetable {
  constructor(name) {
    this.name = name;
    this.count = 0;
    this.lastError = null;
  }

  // Initialize with a specific count
  setCount(count) {
    this.count = count;
    this.lastError = null;
  }

  // Get current count
  getCount() {
    return this.count;
  }

  // Get vegetable name
  getName() {
    return this.name;
  }

  // Add vegetables
  add(count) {
    this.count += count;
  }

  // Eat vegetables
  eat(count) {
    if (this.count >= count) {
      this.count -= count;
      this.lastError = null;
      return true;
    } else {
      const error = `Not enough ${this.name}s available. You have ${this.count} but tried to eat ${count}`;
      this.lastError = error;
      throw new Error(error);
    }
  }

  // Try to eat vegetables (catches errors internally)
  tryToEat(count) {
    try {
      return this.eat(count);
    } catch (error) {
      this.lastError = error.message;
      return false;
    }
  }

  // Check if we have enough vegetables
  hasEnough(count) {
    return this.count >= count;
  }

  // Use vegetables for making salad
  useForSalad(count) {
    if (this.hasEnough(count)) {
      this.count -= count;
      return true;
    }
    return false;
  }

  // Get the last error message
  getLastError() {
    return this.lastError;
  }

  // Clear the last error
  clearError() {
    this.lastError = null;
  }

  // Reset count to zero
  reset() {
    this.count = 0;
    this.lastError = null;
  }

  // Get a description of current state
  describe() {
    return `I have ${this.count} ${this.name}${this.count !== 1 ? 's' : ''}`;
  }
}

module.exports = Vegetable;
