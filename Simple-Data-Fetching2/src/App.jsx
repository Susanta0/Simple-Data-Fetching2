import { useState, useEffect } from "react";
import "./App.css";
import PostItem from "./Components/PostItem";

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const displayData = async (page) => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
      );
      const finalData = await res.json();

      setPosts(finalData);
    } catch (error) {
      setError("Somthing went wrong", error);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };
  useEffect(() => {
    displayData(page);
  }, [page]);

  return (
    <>
      {loading ? (
        <div className="imageDiv">
          <img src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif" />
        </div>
      ) : (
        <PostItem data={posts} page={page} setPage={setPage} />
      )}
    </>
  );
}

export default App;
