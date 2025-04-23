export type Direction = "N" | "E" | "S" | "W";

export class Robot {
    x: number;
    y: number;
    direction: Direction;
    fuel: number;
    planet: string;

    constructor(
        x: number,
        y: number,
        direction: Direction,
        fuel: number,
        planet: string
    ) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.fuel = fuel;
        this.planet = planet;
    }

    turnLeft() {
        this.fuel -= 1;
        const directions: Direction[] = ["N", "W", "S", "E"];
        this.direction =
            directions[(directions.indexOf(this.direction) + 1) % 4];
    }

    turnRight() {
        this.fuel -= 1;
        const directions: Direction[] = ["N", "E", "S", "W"];
        this.direction =
            directions[(directions.indexOf(this.direction) + 1) % 4];
    }

    move(units: number) {
        this.fuel -= 1;
        switch (this.direction) {
            case "N":
                this.y += units;
                break;
            case "E":
                this.x += units;
                break;
            case "S":
                this.y -= units;
                break;
            case "W":
                this.x -= units;
                break;
        }
    }

    getPosition(): string {
        return `${this.x} ${this.y} ${this.direction} ${this.fuel}`;
    }
}
