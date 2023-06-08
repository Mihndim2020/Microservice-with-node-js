const express = require("express");
const bodyParser = require("body-parser"); // you don't need to install an extra package for this
const { randomBytes } = require("crypto");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 4001;

const commentsByPostId = {};

app.post("/posts/:id/comments", (req, res) => {
  const commentId = randomBytes(4).toString("hex");
  const { content } = req.body;
  const comments = commentsByPostId[req.params.id] || [];
  comments.push({ id: commentId, content });
  commentsByPostId[req.params.id] = comments;
  res.status(201).send(comments);
});

app.get("/posts/:id/comments", (req, res) => {
  res.status(200).send(commentsByPostId[req.params.id] || []);
});

app.listen(port, () => {
  console.log(`The server is listening on port: ${port}`);
});
