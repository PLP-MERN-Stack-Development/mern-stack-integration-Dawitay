import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import useApi from "../hooks/useApi";

export default function PostDetails() {
  const { id } = useParams();
  const { data: post, callApi } = useApi("/posts");

  useEffect(() => {
    callApi(null, id);
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>
        <b>Author:</b> {post.author?.name}
      </p>
      <Link to={`/edit/${post._id}`}>Edit</Link>
    </div>
  );
}
