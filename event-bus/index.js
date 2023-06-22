const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());
const port = process.env.PORT || 4005;

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;
  console.log(event.type);

  events.push(event);

  axios
    .post("http://localhost:4000/events", event)
    .catch((error) => console.log(error.message));
  axios
    .post("http://localhost:4001/events", event)
    .catch((error) => console.log(error.message));
  axios
    .post("http://localhost:4002/events", event)
    .catch((error) => console.log(error.message));

  axios
    .post("http://localhost:4003/events", event)
    .catch((error) => console.log(error.message));

  res.send({ status: "OK" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(port, () => {
  console.log(`The server is listening on port ${port}`);
});
