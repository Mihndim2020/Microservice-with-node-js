import React from "react";

function CommentList({ comments }) {
  // Our comments are fetched directly along with their posts
  // const [comments, setComments] = useState([]);

  // const fetchComments = async () => {
  //   const response = await axios.get(
  //     `http://localhost:4001/posts/${postId}/comments`
  //   );
  //   setComments(response.data);
  //   console.log(response);
  // };

  // useEffect(() => {
  //   fetchComments();
  // }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <div>{renderedComments}</div>;
}

export default CommentList;
