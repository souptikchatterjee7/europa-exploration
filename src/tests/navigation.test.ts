import { Robot } from "../models/Robot";
import { executeInstructions } from "../utils/navigation";

describe("Europa Exploration Mission Navigation", () => {
    test("Should correctly navigate the robot.", () => {
        const robot = new Robot(1, 2, "N");
        executeInstructions(robot, "LMLMLMLMM", 5, 5);
        expect(robot.getPosition()).toBe("1 3 N");
    });

    test("Should correctly navigate the robot.", () => {
        const robot = new Robot(3, 3, "E");
        executeInstructions(robot, "MMRMMRMRRM", 5, 5);
        expect(robot.getPosition()).toBe("5 1 E");
    });

    test("Should not move robot out of plateau bounds.", () => {
        const robot = new Robot(0, 0, "S");
        executeInstructions(robot, "MMMM", 5, 5);
        expect(robot.getPosition()).toBe("0 0 S");
    });

    test("Complex boundary conditions.", () => {
        const robot = new Robot(5, 5, "N");
        executeInstructions(robot, "MMMMRMMMM", 5, 5);
        expect(robot.getPosition()).toBe("5 5 E");
    });

    test("Robot turning correctly.", () => {
        const robot = new Robot(2, 2, "N");
        executeInstructions(robot, "RRRR", 5, 5);
        expect(robot.getPosition()).toBe("2 2 N");
    });
});
