🌍 Europa Exploration Mission

This project provides a navigation solution built in Node.js with TypeScript, enabling NASA robots to explore the surface of Jupiter's moon, Europa. It simulates robot navigation based on provided coordinates and commands.

🚀 Getting Started

✅ Prerequisites

Node.js (v18.x or newer recommended)

npm (npm included with Node.js)

✅ Installation

Clone this repository and install dependencies:

git clone https://github.com/souptikchatterjee7/europa-exploration
cd europa-exploration
npm install

🛠️ Scripts

Run the project:

npm start

Linting:

npm run lintify

Format the code:

npm run prettify

Lint and format (auto-fix):

npm run fix

Run Test Cases:

npm run test

🛰️ Running the Program

✅ Input

Modify the input.txt file located in the project's root directory:

5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM

Each robot has two lines:

Initial coordinates (x y orientation)

Instructions (L, R, M)

✅ Execution

Run the navigation logic:

npm start

✅ Output

Expected output (based on provided input):

1 3 N
5 1 E

📚 ESLint & Prettier

ESLint and Prettier are set up for maintaining code quality and consistency. Run linting and formatting commands regularly:

npm run fix

⚙️ Assumptions

Robots will not move beyond the defined plateau boundaries.

Inputs are correctly formatted as specified.

Commands provided will be valid (L, R, M).

🧑‍🚀 Author

Souptik Chatterjee

📃 License

This project is open-source and available under the MIT License.
