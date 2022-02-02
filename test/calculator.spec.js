import assert from 'assert';
import Calculator from '../calculator.js';

const iThrowError = () => {
  throw new Error('Error thrown');
};

describe('Calculator', function () {
  describe('#constructor()', function () {
    it('should return 0 by default', function () {
      let calc = new Calculator();
      assert.equal(calc.value(), 0);
    });
  });

  describe('#set()', function () {
    it('it should change the inner value of the calculator', function () {
      let calc = new Calculator();
      calc.set(100);
      let final = calc.value();

      assert.equal(final, 100);
    });

    it('it should keep only the latest value set', function () {
      let calc = new Calculator();
      calc.set(50);
      calc.set(100);
      calc.set(200);
      let final = calc.value();

      assert.equal(final, 200);
    });
  });

  describe('#reset()', function () {
    // it should return 0 after reset
    it('should return 0 after reset', function () {
      let calc = new Calculator();
      assert.equal(calc.value(), 0);
    });
  });

  describe('#add()', function () {
    it('it should not change the value when we add 0', function () {
      let calc = new Calculator();
      calc.set(100);
      calc.add(0); // added value

      assert.equal(calc.value(), 100);
    });

    it('should changes the inner value by a difference of X', function () {
      let calc = new Calculator();
      calc.set(100);
      let initial = calc.value();
      let added = 98;
      calc.add(added); // added value
      let final = calc.value();

      assert.equal(final - initial, added);
    });
  });

  describe('#subtract()', function () {
    it('it should not change the value when we subtract 0', function () {
      let calc = new Calculator();
      calc.set(100);
      calc.subtract(0); // subtract value

      assert.equal(calc.value(), 100);
    });

    it('should changes the inner value by a difference of X', function () {
      let calc = new Calculator();
      calc.set(100);
      let initial = calc.value();
      let sub = 98;
      calc.subtract(sub); // subtract value

      assert.equal(initial - sub, 2);
    });

    it('should (subtract) work with other method', function () {
      let calc = new Calculator();
      calc.set(100).add(3).subtract(4); // subtract value

      assert.equal(calc.value(), 99);
    });
  });

  describe('#multiply()', function () {
    it('should not change the value when we multiply with 1', function () {
      let calc = new Calculator();
      calc.set(100);
      calc.multiply(1);
      assert.equal(calc.value(), 100);
    });

    it('should change to 0 when we multiply with 0', function () {
      let calc = new Calculator();
      calc.set(100);
      calc.multiply(0);
      assert.equal(calc.value(), 0);
    });

    it('should work even with negative values', function () {
      let calc = new Calculator();
      calc.set(100);
      calc.multiply(-1);
      assert.equal(calc.value(), -100);
    });

    // it changes the inner value by +X
  });

  describe('#divide()', function () {
    it('should changes the inner value by a difference of X', function () {
      let calc = new Calculator();
      calc.set(100);
      calc.divide(2);
      assert.equal(calc.value(), 50);
    });

    it('should not change the value when we divide with 1', function () {
      let calc = new Calculator();
      calc.set(100);
      calc.divide(1);
      assert.equal(calc.value(), 100);
    });

    it('should throw an exception when we divide by 0', function () {
      let calc = new Calculator();
      calc.set(100);
      calc.divide(0);
      assert.throws(iThrowError, Error, 'Error thrown');
    });

    it('should (divide) work with other method', function () {
      let calc = new Calculator();
      calc.set(100).divide(2).add(5);

      assert.equal(calc.value(), 55);
    });
  });

  it('should allow composing functions', function () {
    let calc = new Calculator();
    calc.set(100).add(10);
    assert.equal(calc.value(), 110);

    calc.reset().add(10).multiply(2);
    assert.equal(calc.value(), 20);

    calc.reset().multiply(2).add(10);
    assert.equal(calc.value(), 10);
  });

  describe('#value()', function () {
    // je vérifie que la méthode existe
  });
});
