export class Fuels {
    private _fuel : number = 0;
    private readonly MAXIMUM_FUEL_CAPACITY;
    private readonly _FUEL_MILEAGE;

    constructor(MAXIMUM_FUEL_CAPACITY: number, fuel: number, FUEL_MILEAGE: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
        this._fuel = fuel;
        this._FUEL_MILEAGE = FUEL_MILEAGE;
    }

    get fuel(): number {
        return this._fuel;
    }

    set fuel(value: number) {
        this._fuel = value;
    }

    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }

    get FUEL_MILEAGE() : number {
        return this._FUEL_MILEAGE;
    }

}