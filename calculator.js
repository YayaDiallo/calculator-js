class Calculator {
  constructor() {
    this.inner_value = 0;
  }

  // change inner value
  set(value) {
    this.inner_value = value;
    return this;
  }

  reset() {
    this.inner_value = 0;
    return this;
  }

  // return inner value
  value() {
    return this.inner_value;
  }

  add(value) {
    this.inner_value += value;
    return this;
  }

  subtract(value) {
    this.inner_value -= value;
    return this;
  }

  multiply(value) {
    this.inner_value *= value;
    return this;
  }

  divide(value) {
    this.inner_value /= value;
    return this;
  }
}

export default Calculator;
