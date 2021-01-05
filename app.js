const express = require("express");
const app = express();
const port = 9090;

app.get("/", (req, res) => {
  res.send("Hello Electron");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
