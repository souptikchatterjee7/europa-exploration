export class Planet {
    id: string;
    maxX: number;
    maxY: number;

    constructor(id: string, maxX: number, maxY: number) {
        this.id = id;
        this.maxX = maxX;
        this.maxY = maxY;
    }

    getMaxX() {
        return this.maxX;
    }
    getMaxY() {
        return this.maxY;
    }
}
