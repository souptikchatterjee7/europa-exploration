import { Robot } from "../models/Robot";

export function executeInstructions(
    robot: Robot,
    instructions: string,
    maxX: number,
    maxY: number
) {
    for (const command of instructions) {
        switch (command) {
            case "L":
                robot.turnLeft();
                break;
            case "R":
                robot.turnRight();
                break;
            case "M":
                const prevX = robot.x;
                const prevY = robot.y;
                robot.move();
                if (
                    robot.x < 0 ||
                    robot.x > maxX ||
                    robot.y < 0 ||
                    robot.y > maxY
                ) {
                    robot.x = prevX;
                    robot.y = prevY;
                    console.warn(
                        `Robot can't move out of bounds (${maxX}, ${maxY})`
                    );
                }
                break;
        }
    }
}
