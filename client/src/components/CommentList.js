import React, { useEffect, useState } from "react";
import axios from "axios";

function CommentList({ postId }) {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    const response = await axios.get(
      `http://localhost:4001/posts/${postId}/comments`
    );
    setComments(response.data);
    console.log(response);
  };

  useEffect(() => {
    fetchComments();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <div>{renderedComments}</div>;
}

export default CommentList;
