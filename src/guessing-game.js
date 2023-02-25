class GuessingGame {
  one = 0;
  two = 1000;
  NumberAver;

  setRange = (min, max) => {
    this.one = min;
    this.two = max;
  };

  guess = () => {
    return (this.NumberAver = Math.round((this.one + this.two) / 2));
  };

  lower = () => {
    this.two = this.NumberAver;
  };

  greater = () => {
    this.one = this.NumberAver;
  };
}

module.exports = GuessingGame;
