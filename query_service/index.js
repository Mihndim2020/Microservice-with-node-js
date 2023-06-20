const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 4002;
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/events", (req, res) => {
  const { type, data } = req.body;

  if (type === "PostCreated") {
    // posts[req.body.data.postId] = req.body.data;
    // posts[req.body.data.postId].comments = [];
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
    console.log(posts);
  }

  if (type === "CommentCreated") {
    // post[req.body.data.postID].comments.push(req.body.data);
    const { id, content, postId, status } = data;
    posts[postId].comments.push({ id, content, status });
    console.log(posts);
  }

  if (type === "CommentUpdated") {
    const { id, content, postId, status } = data;
    const post = posts[postId];
    const comment = post.comments.find((comment) => {
      return comment.id === id;
    });
    comment.status = status;
    comment.content = content;
  }

  console.log(posts);
  res.send({});
});

app.listen(port, () => {
  console.log(`The server is running on port: ${port}`);
});
