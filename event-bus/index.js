const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 4005;

app.post("/events", (req, res) => {
  const event = req.body;

  axios
    .post("http://localhost:4000/events", event)
    .catch((error) => console.log(error.message));
  axios
    .post("http://localhost:4001/events", event)
    .catch((error) => console.log(error.message));
  axios
    .post("http://localhost:4003/events", event)
    .catch((error) => console.log(error.message));

  res.send({ status: "OK" });
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
