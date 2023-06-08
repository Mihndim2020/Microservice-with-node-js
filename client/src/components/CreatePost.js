import React, { useState } from "react";
import axios from "axios";

const url = "http://localhost:4000/posts";

const CreatePost = () => {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(url, {
      title,
    });
    console.log(response);
    setTitle("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
      </form>
      <button onClick={handleSubmit} className="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default CreatePost;
