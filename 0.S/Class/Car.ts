import { Engine } from "./Engine";
import { CarFuel } from "./CarFuel";
import { MusicPlayer } from "./MusicPlayer";

export class Car {
    private _musicPlayer: MusicPlayer;
    private _carFuel: CarFuel;
    private _engine: Engine;
    private _miles: number = 0;

    constructor(engine: Engine, carFuel: CarFuel, musicPlayer: MusicPlayer) {
        this._carFuel = carFuel;
        this._engine = engine;
        this._musicPlayer = musicPlayer;
    }

    get miles(): number {
        return this._miles;
    }

    get musicPlayer(): MusicPlayer{
        return this._musicPlayer;
    }

    get carFuel(): CarFuel{
        return this._carFuel;
    }

    get engine(): Engine{
        return this._engine;
    }

    drive() {
        if(this._engine.engineStatus === false || this.carFuel.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }

        this.carFuel.fuel -= 1;
        this._miles += this.carFuel.FUEL_MILEAGE;
    }
}