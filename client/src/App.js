import React from "react";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";

function App() {
  return (
    <div className="App">
      <h1>Create Post !!!</h1>
      <CreatePost />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
}

export default App;
