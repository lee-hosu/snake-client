const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("You are connected! 🐍");

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 50);
    // setTimeout(() => {
    //   conn.write("Move: up");
    // }, 1000);
    // setTimeout(() => {
    //   conn.write("Move: left");
    // }, 2000);
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 3000);
  });

  conn.write("Name: HSL");

  conn.on("data", (data) => {
    console.log("Received data:", data);
  });

  return conn;
};

module.exports = {
  connect,
};
