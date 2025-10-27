import { useEffect } from "react";
import useApi from "../hooks/useApi";
import PostCard from "../components/PostCard";
import Loader from "../components/Loader";

export default function Home() {
  const { data: posts, loading, callApi } = useApi("/posts");

  useEffect(() => {
    callApi();
  }, []);

  if (loading) return <Loader />;
  if (!posts) return <p>No posts yet</p>;

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))}
    </div>
  );
}
