const client = require("./client");

console.log("Connecting ...");
client.connect();

// setup interface to handle user input from stdin
const handleUserInput = function (key) {
  process.stdout.write("key down");
  if (key === "\u0003") {
    process.exit();
  }
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  stdin.on("data", handleUserInput);

  return stdin;
};

setupInput();
