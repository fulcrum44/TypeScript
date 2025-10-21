import { ConfigSubmarina } from "../config/ConfigSubmarina";

class Submarino {

    private x: number;
    private y: number;

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    public init(config: ConfigSubmarino): void {
        this.x = Math.floor(Math.random() * config.size);
        this.y = Math.floor(Math.random() * config.trail);
    }
}

export { Submarino };