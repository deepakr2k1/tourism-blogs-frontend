import { useEffect, useState } from "react";
import Blog from "../components/Blog";
import { getAllBlogs } from "../services/BlogService";

export default function ListBlogs() {
  const [blogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    let allBlogs = await getAllBlogs();
    setBlogs(allBlogs);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
      { blogs && blogs.length > 0 && blogs.map(blog => (
        <Blog { ...blog } />
      )) }
    </>
  );
}