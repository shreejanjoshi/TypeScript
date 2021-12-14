"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(engine, fuels, musicPlayer) {
        this._miles = 0;
        this._fuels = fuels;
        this._engine = engine;
        this._musicPlayer = musicPlayer;
    }
    Object.defineProperty(Car.prototype, "miles", {
        get: function () {
            return this._miles;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "musicPlayer", {
        get: function () {
            return this._musicPlayer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "fuel", {
        get: function () {
            return this._fuels;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        enumerable: false,
        configurable: true
    });
    Car.prototype.drive = function () {
        if (this._engine.engineStatus === false || this._fuels.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        this._fuels.fuel -= 1;
        this._miles += this.fuel.FUEL_MILEAGE;
    };
    return Car;
}());
exports.Car = Car;
