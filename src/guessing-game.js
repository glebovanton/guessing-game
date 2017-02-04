class GuessingGame {
    constructor() {
        this.max = 0;
        this.min = 0;
    }

    setRange(min, max) {
        this._min = min;
        this._max = max;
    }

    guess() {
        this._guesNum = Math.round((this._max + this._min) / 2);
        return this._guesNum;
    }

    lower() {
        this._max = this._guesNum;
    }

    greater() {
        this._min = this._guesNum;
    }
}

module.exports = GuessingGame;
