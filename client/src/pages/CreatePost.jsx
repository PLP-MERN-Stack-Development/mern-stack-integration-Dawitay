import { useState, useContext } from "react";
import useApi from "../hooks/useApi";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { callApi } = useApi("/posts", "post");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return alert("Login first");
    await callApi({ title, content });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <h3>Create Post</h3>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
