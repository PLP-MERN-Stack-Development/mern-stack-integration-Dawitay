import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ background: "#333", color: "#fff", padding: "1rem" }}>
      <Link to="/" style={{ color: "#fff", marginRight: "1rem" }}>MERN Blog</Link>
      {user ? (
        <>
          <Link to="/create" style={{ color: "#fff", marginRight: "1rem" }}>New Post</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/login" style={{ color: "#fff" }}>Login</Link>
      )}
    </nav>
  );
}
