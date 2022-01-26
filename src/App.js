import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePost } from "./coreapicalls";
import "./App.css";

const api = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com/`,
});

function App() {
  const [post, setPost] = useState();

  const [success, setSuccess] = useState(false);

  const successMessage = () => {
    return (
      <div className="sMsg" style={{ display: success ? "" : "none" }}>
        <h1 style={{ color: "#DDD101" }}>Post deleted Successfully</h1>
      </div>
    );
  };

  const setSuccessMsg = () => {
    setSuccess(true);
  };

  const onDelete = (e) => {
    setSuccessMsg();
    deletePost(e.target.id);
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  useEffect(() => {
    api.get("/posts").then((res) => {
      console.log(res.data);
      setPost(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Link to="/post">
        <button
          style={{
            display: "block",
            width: "100vw",
            height: "6vh",
            fontSize: "1.6em",
            textDecoration: "none",
          }}
        >
          Create Post
        </button>
      </Link>
      {successMessage()}
      {post &&
        post
          .slice()
          .reverse()
          .map((p, index) => {
            return (
              <div key={p.id}>
                <h1>{p.title}</h1>
                <p>{p.body}</p>
                <Link to={`/update/${p.id}`}>
                  <button id={p.id} style={{ marginRight: "1rem" }}>
                    Update Post
                  </button>
                </Link>
                <button id={p.id} onClick={onDelete}>
                  Delete Post
                </button>
              </div>
            );
          })}
    </div>
  );
}

export default App;
