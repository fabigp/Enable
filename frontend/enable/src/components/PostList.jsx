import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./Post"; // Importa el componente Post
import NewPost from "./NewPost.jsx";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/posts");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []); // Ejecuta la carga de posts solo una vez al montar el componente

  return (
    <>
      <section className="section">
        <NewPost />
        <section className="section-vert">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </section>
      </section>
    </>
  );
};

export default PostList;
