export type Direction = "N" | "E" | "S" | "W";

export class Robot {
    x: number;
    y: number;
    direction: Direction;

    constructor(x: number, y: number, direction: Direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    turnLeft() {
        const directions: Direction[] = ["N", "W", "S", "E"];
        this.direction =
            directions[(directions.indexOf(this.direction) + 1) % 4];
    }

    turnRight() {
        const directions: Direction[] = ["N", "E", "S", "W"];
        this.direction =
            directions[(directions.indexOf(this.direction) + 1) % 4];
    }

    move() {
        switch (this.direction) {
            case "N":
                this.y++;
                break;
            case "E":
                this.x++;
                break;
            case "S":
                this.y--;
                break;
            case "W":
                this.x--;
                break;
        }
    }

    getPosition(): string {
        return `${this.x} ${this.y} ${this.direction}`;
    }
}
