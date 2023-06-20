const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const port = process.env.PORT || 4003;

const app = express();
app.use(bodyParser.json());

app.post("/events", async (req, res) => {
  const { type, data } = req.body;
  const { id, postId, content } = data;

  if (type === "CommnentCreated") {
    const status = data.content.includes("orange") ? "rejected" : "approved";

    await axios.post("http://localhost:4005/events", {
      type: "CommentModerated",
      data: {
        id,
        postId,
        status,
        content,
      },
    });
    console.log("Comment moderated");
  }
  res.send({ status: "OK" });
});

app.listen(port, () => {
  console.log(`The moderation server is listening on port: ${port}`);
});
