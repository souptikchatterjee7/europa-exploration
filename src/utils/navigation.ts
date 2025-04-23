import { Robot } from "../models/Robot";
import { Planet } from "../models/Planet";

export function executeInstructions(
    robot: Robot,
    planet: Planet,
    instructions: string
) {
    const maxX = planet.getMaxX();
    const maxY = planet.getMaxY();

    for (const command of instructions) {
        if (robot.fuel === 0) {
            break;
        }
        switch (command) {
            case "L":
                robot.turnLeft();
                break;
            case "R":
                robot.turnRight();
                break;
            case "M":
                moveRobot(1);
                break;
            case "B":
                moveRobot(-1);
                break;
        }
    }

    function moveRobot(units: number) {
        const prevX = robot.x;
        const prevY = robot.y;
        robot.move(units);
        if (
            robot.x < 0 ||
            robot.x > maxX ||
            robot.y < 0 ||
            robot.y > maxY ||
            robot.fuel < 0
        ) {
            robot.x = prevX;
            robot.y = prevY;
        }
    }
}
