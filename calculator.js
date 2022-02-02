class Calculator {
  constructor() {
    this.inner_value = 0;
  }

  // change inner value
  set(value) {
    if (typeof value !== 'number') {
      throw new Error('Unable to handle non-numbers values');
    }

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
    if (typeof value !== 'number') {
      throw new Error('Unable to handle non-numbers values');
    }

    this.inner_value += value;
    return this;
  }

  subtract(value) {
    if (typeof value !== 'number') {
      throw new Error('Unable to handle non-numbers values');
    }

    this.inner_value -= value;
    return this;
  }

  multiply(value) {
    if (typeof value !== 'number') {
      throw new Error('Unable to handle non-numbers values');
    }

    this.inner_value *= value;
    return this;
  }

  divide(value) {
    if (typeof value !== 'number') {
      throw new Error('Unable to handle non-numbers values');
    }

    if (value === 0) {
      throw new Error('Unable to divide by zero');
    }

    this.inner_value /= value;
    return this;
  }

  print() {
    console.log(this.inner_value);
  }
}

// const newCalc = new Calculator();
// console.log(newCalc.set(10).add('2'));

export default Calculator;
