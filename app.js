const express = require("express");
const app = express();
const cors = require("cors");
const port = 9090;

app.use(cors());

app.get("/", (req, res) => {
  res.send({ firstName: "google", lasName: "facebook", isOnCall: true });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
