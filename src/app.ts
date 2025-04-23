import * as fs from "fs";

import { Robot, Direction } from "./models/Robot";
import { executeInstructions } from "./utils/navigation";
import { Planet } from "./models/Planet";

function main(inputFilePath: string) {
    const input = fs.readFileSync(inputFilePath, "utf-8").trim().split("\n");
    const planetCount = parseInt(input.shift()!);

    const instructionsObj: any = {};
    for (let i = 0; i < planetCount; i += 1) {
        const inputArr = input.pop()?.split(" ") || [];
        instructionsObj[inputArr[0]] = inputArr[1];
    }

    for (let i = 0; i < planetCount; i += 1) {
        const [maxX, maxY] = input.shift()!.split(" ");
        const planet = new Planet(
            (i + 1).toString(),
            parseInt(maxX),
            parseInt(maxY)
        );
        const [x, y, direction, fuel] = input.shift()!.split(" ");
        const robot = new Robot(
            Number(x),
            Number(y),
            direction as Direction,
            Number(fuel),
            (i + 1).toString()
        );
        executeInstructions(robot, planet, instructionsObj[(i + 1).toString()]);
        console.log(robot.getPosition());
    }
}

main("input.txt");
