import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div style={{ border: "1px solid #ddd", margin: "1rem", padding: "1rem" }}>
      <h3>{post.title}</h3>
      <p>{post.content.slice(0, 120)}...</p>
      <Link to={`/posts/${post._id}`}>Read More</Link>
    </div>
  );
}
