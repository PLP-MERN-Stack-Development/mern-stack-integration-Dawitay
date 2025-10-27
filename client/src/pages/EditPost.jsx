import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useApi from "../hooks/useApi";

export default function EditPost() {
  const { id } = useParams();
  const { callApi, data: post } = useApi("/posts");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    callApi(null, id);
  }, [id]);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await callApi({ title, content }, id);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "1rem" }}>
      <h3>Edit Post</h3>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button type="submit">Save</button>
    </form>
  );
}
