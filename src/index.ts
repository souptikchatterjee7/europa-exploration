import * as fs from "fs";

import { Robot, Direction } from "./models/Robot";
import { executeInstructions } from "./utils/navigation";

function main(inputFilePath: string) {
    const input = fs.readFileSync(inputFilePath, "utf-8").trim().split("\n");
    const [maxX, maxY] = input.shift()!.split(" ").map(Number);

    while (input.length) {
        const [x, y, direction] = input.shift()!.split(" ");
        const robot = new Robot(Number(x), Number(y), direction as Direction);
        const instructions = input.shift()!;
        executeInstructions(robot, instructions, maxX, maxY);
        console.log(robot.getPosition());
    }
}

main("input.txt");
