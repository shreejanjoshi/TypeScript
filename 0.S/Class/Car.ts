import { Engine } from "./Engine";
import { Fuels } from "./Fuels";
import { MusicPlayer } from "./MusicPlayer";

export class Car {
    private _musicPlayer: MusicPlayer;
    private _fuels: Fuels;
    private _engine: Engine;
    private _miles: number = 0;

    constructor(engine: Engine, fuels: Fuels, musicPlayer: MusicPlayer) {
        this._fuels = fuels;
        this._engine = engine;
        this._musicPlayer = musicPlayer;
    }

    get miles(): number {
        return this._miles;
    }

    get musicPlayer(): MusicPlayer{
        return this._musicPlayer;
    }

    get fuel(): Fuels{
        return this._fuels;
    }

    get engine(): Engine{
        return this._engine;
    }

    drive() {
        if(this._engine.engineStatus === false || this._fuels.fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }

        this._fuels.fuel -= 1;
        this._miles += this.fuel.FUEL_MILEAGE;
    }
}