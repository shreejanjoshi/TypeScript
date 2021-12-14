"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarFuel = void 0;
var CarFuel = /** @class */ (function () {
    function CarFuel(MAXIMUM_FUEL_CAPACITY, fuel, FUEL_MILEAGE) {
        this._fuel = 0;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._fuel = fuel;
        this._FUEL_MILEAGE = FUEL_MILEAGE;
    }
    Object.defineProperty(CarFuel.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        set: function (value) {
            this._fuel = value;
        },
        enumerable: false,
        configurable: true
    });
    CarFuel.prototype.addFuel = function (fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    };
    Object.defineProperty(CarFuel.prototype, "FUEL_MILEAGE", {
        get: function () {
            return this._FUEL_MILEAGE;
        },
        enumerable: false,
        configurable: true
    });
    return CarFuel;
}());
exports.CarFuel = CarFuel;
